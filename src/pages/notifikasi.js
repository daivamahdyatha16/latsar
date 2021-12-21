import { useState, useEffect } from "react";
// import axios from "axios";
import { axiosGeneral, capitalizeFirstLetter} from "../components/global";
import { useToasts } from "react-toast-notifications";
// import { useDispatch } from "react-redux";
import { setLoading } from "../store/actionCreator";

const Notifikasi = () => {
  const [nama, setNama]= useState("");
  const [email, setEmail]= useState("");
  const [message, setMessage]= useState("");
  const [message1, setMessage1]= useState("");
  const [message2, setMessage2]= useState("");
  const {addToast} = useToasts ();

  const clearData = async () => {
    setNama("")
    setEmail("")
    setMessage("")
  }
  const kirimEMail = async () => {
    try{
      var bodyFormData = new FormData();
      bodyFormData.append('nama_pegawai', nama);
      bodyFormData.append('email', email);
      bodyFormData.append('message', message);
      bodyFormData.append('message1', message1);
      bodyFormData.append('message2', message2);

      const response = await axiosGeneral.post("/sendMail", bodyFormData)
      const { status, data } = response;
      if (status == 200) {
        addToast("Berhasil Kirim Pesan", { appearance: "success" });
        Notifikasi(false)
        clearData()
      } else {
        addToast("Gagal Kirim Pesan", { appearance: "error" });
      }
      console.log(response)
    }
    catch (error){
      
    }
  }


  return (
    <div>
      <body class="antialiased font-sans bg-white">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">Notifikasi</h2>
            </div>
            <form
              action="#"
              class="inline-block min-w-full shadow rounded-xl md:w-1/2 border border-black p-6 bg-gray-200"
            >
              <h2 class="text-2xl pb-3 font-semibold">Send Message</h2>
              <div>
                <div class="flex flex-col mb-3">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    class="px-3 py-2 shadow rounded-sm bg-white border border-gray-900 focus:border-blue-500 focus:outline-none focus:bg-white focus:text-black"
                    autocomplete="off"
                    value={nama}
                    onChange = {(val) => setNama(val.target.value)}
                  />
                </div>
                <div class="flex flex-col mb-3">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    class="px-3 py-2shadow rounded-sm bg-white border border-gray-900 focus:border-blue-500 focus:outline-none focus:bg-white focus:text-black"
                    autocomplete="off"
                    value={email}
                    onChange = {(val) => setEmail(val.target.value)}

                  />
                </div>
                <div class="flex flex-col mb-3">
                  <label for="message">Agenda</label>
                  <input
                    // rows="4"
                    id="message"
                    class="px-3 py-2 shadow rounded-sm bg-white border border-gray-900 focus:border-blue-500 focus:outline-none focus:bg-white focus:text-black"
                    value={message}
                    onChange = {(val) => setMessage(val.target.value)}
                  ></input>
                </div>
                <div class="flex flex-col mb-3">
                  <label for="message1">Ruang</label>
                  <input
                    // rows="4"
                    id="message1"
                    class="px-3 py-2 shadow rounded-sm bg-white border border-gray-900 focus:border-blue-500 focus:outline-none focus:bg-white focus:text-black"
                    value={message1}
                    onChange = {(val) => setMessage1(val.target.value)}
                  ></input>
                </div>
                <div class="flex flex-col mb-3">
                  <label for="message2">Jam</label>
                  <input
                    // rows="4"
                    id="message2"
                    class="px-3 py-2 shadow rounded-sm bg-white border border-gray-900 focus:border-blue-500 focus:outline-none focus:bg-white focus:text-black"
                    value={message2}
                    onChange = {(val) => setMessage2(val.target.value)}
                  ></input>
                </div>
              </div>
              <div class="w-full pt-3">
                <button
                  type="submit"
                  class="w-full shadow rounded-sm bg-blue-500 border border-black px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-indigo-500 hover:text-white text-xl cursor-pointer"
                  onClick={() => kirimEMail()}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Notifikasi;

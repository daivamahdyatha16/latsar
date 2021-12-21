import React, { useState, useEffect } from "react";
import { axiosGeneral, capitalizeFirstLetter} from "../components/global";
import { useToasts } from "react-toast-notifications";

function Anggota() {
  const [showAnggota, setShowAnggota] = React.useState(false);
  const [showEditAnggota, setShowEditAnggota] = React.useState(false);
  const [nama_pegawai, setNama_pegawai] = useState("")
  const [email, setEmail] = useState("")
  const [jabatan, setJabatan] = useState("")
  const [nip, setNip] = useState("")
  const [idPegawai, setIdPegawai] = useState("")
  const [allPegawai, setAllPegawai] = useState([])
  const { addToast } = useToasts();

  useEffect(() => {
    getDataPegawai();
  }, [showAnggota, showEditAnggota]);

  const clearData = async () => {
    setNama_pegawai("")
    setEmail("")
    setJabatan("")
    setNip("")
  }

  const EditPegawai = async (id) => {
    try{
      var bodyFormData = new FormData();
      bodyFormData.append('nip', nip);
      bodyFormData.append('nama_pegawai', nama_pegawai);
      bodyFormData.append('email', email);
      bodyFormData.append('jabatan', jabatan);

      const response = await axiosGeneral.post(`/pegawai/edit/${id}`, bodyFormData)
      const { status } = response;
      if (status == 200) {
        addToast("Berhasil Edit data", { appearance: "success" });
        setShowEditAnggota(false)
        clearData()
      } else {
        addToast("Gagal Edit data", { appearance: "error" });
      }
    }
    catch (error){
      addToast(error, { appearance: "error" });
    }
  }
  
  const createPegawai = async () => {
    try{
      var bodyFormData = new FormData();
      bodyFormData.append('nip', nip);
      bodyFormData.append('nama_pegawai', nama_pegawai);
      bodyFormData.append('email', email);
      bodyFormData.append('jabatan', jabatan);

      const response = await axiosGeneral.post("/pegawai", bodyFormData)
      const { status, data } = response;
      if (status == 200) {
        addToast("Berhasil tambah data", { appearance: "success"})
        setShowAnggota(false)
        clearData()
      } else {
        addToast("Gagal tambah data", { appearance: "error"})
      }
      console.log(response)
    }
    catch (error){
      addToast(error, {appearance: "error"});
    }
  }

  const getDataPegawai = async () => {
    try{
      const response = await axiosGeneral.get("/pegawai", {});
      const { status, data } = response;
      setAllPegawai (data.Hasil)
      console.log(data.Hasil)
    }
    catch (error){
      
    }
  }

  const getDataPegawaiById = async (id) => {
    try{
      const response = await axiosGeneral.get(`/pegawai/edit/${id}`);
      const { status, data } = response;
      if (status == 200) {
        setNama_pegawai(data.Hasil[0].Nama)
        setNip(data.Hasil[0].NIP)
        setEmail(data.Hasil[0].Email)
        setJabatan(data.Hasil[0].Jabatan)
      } else {

      }
      console.log(data.Hasil)
    }
    catch (error){
      
    }
  }

  const deletePegawai = async (id) => {
    try {
      const response = await axiosGeneral.delete(`/pegawai/${id}`)
      // const {status, data} = response;
      console.log(id)
      getDataPegawai()
      }
      catch (error) {
        
      }
    }

  return (
    <div>
      <body class="antialiased font-sans bg-gray-200">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">Data Anggota</h2>
            </div>
            <button
              type="submit"
              onClick={() => {
                setShowAnggota(true)
                clearData()
              }}
              class="absolute inline-block table-cell border-2 bg-green-400 border-black rounded-lg px-3 py-2 text-black cursor-pointer hover:bg-green-600 hover:text-green-200"
            >
              + Tambah Anggota
            </button>
            {showAnggota ? (
              <div>
                <div className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="sm:max-w-lg w-auto p-10 bg-white rounded-xl z-10">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Tambah Anggota
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-10 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowAnggota(false)}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            NIP
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan NIP"
                            value={nip}
                            onChange={(val) => setNip(val.target.value)}
                          />
                        </div>
                        <div class="grid grid-cols-1">
                          <label 
                          class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                          >
                            Nama
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan nama"
                            value={nama_pegawai}
                            onChange={(val) => setNama_pegawai(val.target.value)}
                          />
                        </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Email
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan E-mail"
                            value={email}
                            onChange={(val) => setEmail(val.target.value)}
                          />
                        </div>
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Jabatan
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan jabatan"
                            value={jabatan}
                            onChange={(val) => setJabatan(val.target.value)}
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                        <button class="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                          onClick={() => setShowAnggota(false)}
                        >
                          Cancel
                        </button>
                        <button class="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        onClick={() => createPegawai()}
                        >
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                                                                                            
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            ) : showEditAnggota ? (
              <div>
                <div className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="sm:max-w-lg w-auto p-10 bg-white rounded-xl z-10">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Edit Anggota
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-10 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => {
                            setShowEditAnggota(false)
                            clearData()
                          }}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            NIP
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan NIP"
                            value={nip}
                            onChange={(val) => setNip(val.target.value)}
                          />
                        </div>
                        <div class="grid grid-cols-1">
                          <label 
                          class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                          >
                            Nama
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan nama"
                            value={nama_pegawai}
                            onChange={(val) => setNama_pegawai(val.target.value)}
                          />
                        </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Email
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan E-mail"
                            value={email}
                            onChange={(val) => setEmail(val.target.value)}
                          />
                        </div>
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Jabatan
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan jabatan"
                            value={jabatan}
                            onChange={(val) => setJabatan(val.target.value)}
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                        <button 
                          class="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                          onClick={() => setShowEditAnggota(false)}
                        >
                          Cancel
                        </button>
                        <button class="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        onClick={() => EditPegawai(idPegawai)}
                        >
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                                                                                            
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            ) : (
              <div class="table w-full p-2 py-12">
              <table class="w-full border">
                <thead>
                  <tr class="bg-gray-50 border-b">
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">No.</div>
                    </th>
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">NIP</div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">
                        Nama
                        
                      </div>
                    </th>
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Email</div>
                    </th>
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">
                        Jabatan
                      </div>
                    </th>
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Edit</div>
                    </th>
                  </tr>
                </thead>
                {allPegawai.map((item, index) => (
                  <tbody>
                    <tr 
                    key={index}
                    class="bg-gray-100 text-center border-b text-sm text-gray-600">
                      <td class="p-2 border-r">{index + 1}</td>
                      <td class="p-2 border-r">{item.NIP}</td>
                      <td class="p-2 border-r">{item.Nama}</td>
                      <td class="p-2 border-r">{item.Email}</td>
                      <td class="p-2 border-r">{item.Jabatan}</td>
                      <td>
                        <a
                        class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                          onClick={()=> {
                            getDataPegawaiById(item.ID)
                            setShowEditAnggota(item.ID)
                            setIdPegawai(item.ID)
                          }}
                        >
                          Ubah
                        </a>
                        <a
                          class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                          type="submit"
                          onClick={()=> deletePegawai(item.ID)} 
                        >
                          Hapus
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))},
              </table>
            </div>
            )}
          </div>
        </div>
      </body>
    </div>
  );
}

export default Anggota;

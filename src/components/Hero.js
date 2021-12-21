import { useState, useEffect } from "react";
// import axios from "axios";
import { axiosGeneral, capitalizeFirstLetter} from "../components/global";
// import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { setLoading } from "../store/actionCreator";


function Hero() {
  const [ShowRapat, setShowRapat] = useState(false);
  const [showEditRapat, setShowEditRapat] = useState(false);
  const [dataAllUser, setDataAllUser] = useState([]);
  const [kegiatan, setKegiatan]= useState("");
  const [ruang_rapat, setruang_rapat]= useState("");
  const [tanggal_rapat, settanggal_rapat]= useState("");
  const [idRapat, setIdRapat] = useState("")
  const {addToast} = useToasts ();

  // const accessToken = useSelector((state) => state.accessToken);
  // const dispatch = useDispatch();
  // const { addToast } = useToasts();
  

  // Pagination

  // const dataUser = useSelector((state) => state.user);

  useEffect(() => {
    GetAllUser();
  }, [ShowRapat, showEditRapat]);

  const clearData = async () => {
    setKegiatan("")
    setruang_rapat("")
    settanggal_rapat("")
  }
  const EditRapat = async (id_rapat) => {
    try{
      var bodyFormData = new FormData();
      bodyFormData.append('kegiatan', kegiatan);
      bodyFormData.append('ruang_rapat', ruang_rapat);
      bodyFormData.append('tanggal_rapat', tanggal_rapat);

      const response = await axiosGeneral.post(`/home/edit/${id_rapat}`, bodyFormData)
      const { status } = response;
      if (status == 200) {
        addToast("Berhasil Edit data", { appearance: "success" });
        setShowEditRapat(false)
        clearData()
      } else {
        addToast("Gagal Edit data", { appearance: "error" });
      }
    }
    catch (error){
      addToast(error, { appearance: "error" });
    }
  }
  const GetAllUser = async () => {
    try {
      // dispatch(setLoading(true));
      const response = await axiosGeneral.get("home", {});
      // setDataAllUser([]);
      const { status, data } = response;
      setDataAllUser(data.Hasil)
      console.log(data.Hasil)
      
    } catch (error) {
      // addToast("gagal mengambil data user", { appearance: "error" });
      // dispatch(setLoading(false));
    }
  };

  const createRapat = async () => {
    try{
      var bodyFormData = new FormData();
      bodyFormData.append('kegiatan', kegiatan);
      bodyFormData.append('ruang_rapat', ruang_rapat);
      bodyFormData.append('tanggal_rapat', tanggal_rapat);

      const response = await axiosGeneral.post("/home/tambah-rapat", bodyFormData)
      const { status, data } = response;
      if (status == 200){
        addToast("Berhasil tambah data", {appearance: "success"})
        setShowRapat(false)
        clearData()
      }
      else{
        addToast("Gagal tambah data", {appearance: "error"})
      }
      GetAllUser()
    } catch(error){
        addToast(error, {appearance: "error"});
      }
  }

  const deleteRapat = async (id_rapat) => {
    try {
      const response = await axiosGeneral.delete(`/home/hapus-rapat/${id_rapat}`)
      // const {status, data} = response;
      GetAllUser()
      console.log(id_rapat)
    } catch (error) {   
    
    }
  }

  return (
    <div>
      <body class="antialiased font-sans bg-gray-200">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">Jadwal Rapat</h2>
            </div>
            <button
              type="submit"
              onClick={() => setShowRapat(true)}
              class="absolute inline-block table-cell border-2 bg-green-400 border-black rounded-lg px-3 py-2 text-black cursor-pointer hover:bg-green-600 hover:text-green-200"
            >
              + Tambah Agenda
            </button>
            {ShowRapat ? (
              <div>
                <div className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="sm:max-w-lg w-auto p-10 bg-white rounded-xl z-10">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Tambah Agenda
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-10 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowRapat(false)}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                          Kegiatan
                        </label>
                        <input
                          class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          type="text"
                          placeholder="Masukkan kegiatan"
                          value={kegiatan}
                          onChange = {(val) => setKegiatan(val.target.value)}
                        />
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Tanggal
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan jam"
                            value={ruang_rapat}
                            onChange = {(val) => setruang_rapat(val.target.value)}
                          />
                        </div>
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Ruang
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan ruang"
                            value={tanggal_rapat}
                            onChange={(val) => settanggal_rapat(val.target.value)}
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                        <button class="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        onClick={() => setShowRapat(false)}>
                          Cancel
                        </button>
                        <button 
                        class="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        type="submit"
                        onClick={() => createRapat()}>
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            ) : showEditRapat ? (
              <div>
                <div className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="sm:max-w-lg w-auto p-10 bg-white rounded-xl z-10">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Edit Rapat
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-10 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => {
                            setShowEditRapat(false)
                            clearData()
                          }}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      
                      <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                          Kegiatan
                        </label>
                        <input
                          class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          type="text"
                          placeholder="Masukkan kegiatan"
                          value={kegiatan}
                          onChange = {(val) => setKegiatan(val.target.value)}
                        />
                      </div>
                      
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Ruang
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan Ruang"
                            value={ruang_rapat}
                            onChange={(val) => setruang_rapat(val.target.value)}
                          />
                        </div>
                        <div class="grid grid-cols-1">
                          <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Tanggal
                          </label>
                          <input
                            class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            placeholder="Masukkan tanggal"
                            value={tanggal_rapat}
                            onChange={(val) => settanggal_rapat(val.target.value)}
                          />
                        </div>
                      </div>

                      <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                        <button 
                          class="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                          onClick={() => setShowEditRapat(false)}
                        >
                          Cancel
                        </button>
                        <button class="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                        onClick={() => EditRapat(idRapat)}
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
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">
                        Kegiatan
                      </div>
                    </th>
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Tempat</div>
                    </th>
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Jam</div>
                    </th>
                    <th class="p-2 border-r  text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">Edit</div>
                    </th>
                  </tr>
                </thead>
                {dataAllUser.map((item, index) => (
                  <tbody>
                    <tr 
                    key={index}
                    class="bg-gray-100 text-center border-b text-sm text-gray-600">
                      <td class="p-2 border-r">{index + 1}</td>
                      <td class="p-2 border-r">{item.Kegiatan}</td>
                      <td class="p-2 border-r">{item.Ruang}</td>
                      <td class="p-2 border-r">{item.Tanggal}</td>
                      <td>
                        <a
                        class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                        onClick={()=> {
                          GetAllUser(item.Id)
                          setShowEditRapat(item.Id)
                          setIdRapat(item.Id)
                        }}  
                        >
                          Ubah
                        </a>
                        <a
                          class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                          type="submit"
                          onClick={()=> deleteRapat(item.Id)} 
                        >
                          Hapus
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))},
              </table>
            </div>
            )}</div>
        </div>
      </body>
    </div>
  );
}         


export default Hero;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

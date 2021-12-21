import { useState, useEffect } from "react";

function Notulensi() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <body class="flex items-center justify-center antialiased font-sans bg-gray-200">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">Hasil Rapat</h2>
            </div>
            <button
              type="submit"
              onClick={() => setShowModal(true)}
              class="absolute inline-block table-cell border-2 bg-green-400 border-black rounded-lg px-3 py-2 text-black cursor-pointer hover:bg-green-600 hover:text-green-200"
            >
              + Tambah Notula
            </button>
            {showModal ? (
              <div>
                <div className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="sm:max-w-lg w-auto p-10 bg-white rounded-xl z-10">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Tambah File</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-10 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <form class="mt-8 space-y-3" action="#" method="POST">
                        <div class="grid grid-cols-1 space-y-2">
                          <label class="text-sm font-bold text-gray-500 tracking-wide">
                            Perihal
                          </label>
                          <input
                            class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            type=""
                            placeholder=""
                          ></input>
                        </div>
                        <div class="grid grid-cols-1 space-y-2">
                          <label class="text-sm font-bold text-gray-500 tracking-wide">
                            Tanggal
                          </label>
                          <input
                            class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            type=""
                            placeholder="01 Januari 2021"
                          ></input>
                        </div>
                        <div class="grid grid-cols-1 space-y-2">
                          <label class="text-sm font-bold text-gray-500 tracking-wide">
                            Attach Document
                          </label>
                          <div class="flex items-center justify-center w-full">
                            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                              <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                  <img
                                    class="has-mask h-36 object-center"
                                    src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                    alt="freepik image"
                                  ></img>
                                </div>
                                <p class="pointer-none text-gray-500 ">
                                  <span class="text-sm">Drag and drop</span>{" "}
                                  files here <br></br> or{" "}
                                  <a
                                    href=""
                                    id=""
                                    class="text-blue-600 hover:underline"
                                  >
                                    select a file
                                  </a>{" "}
                                  from your computer
                                </p>
                              </div>
                              <input type="file" class="hidden"></input>
                            </label>
                          </div>
                        </div>
                        <p class="text-sm text-gray-300">
                          <span>File type: doc,pdf,types of images</span>
                        </p>
                        <div>
                          <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                          >
                            Upload
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            ) : null}

            <div class="mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-xl overflow-hidden py-8">
                <table class="min-w-full leading-normal overflow-hidden sm:shadow">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        KEGIATAN
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        RUANG
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        JAM
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class=" flex-initial items-center">
                          <div class="  ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Rapat Pembahasan Aplikasi Paspor
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Lantai 6</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">09.00</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <td class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight text-red-400 hover:text-blue-600 hover:font-medium cursor-pointer">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Download</span>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex-initial items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Rapat Pembahasan Aplikasi Izin Tinggal
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Lantai 11
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">10.00</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold hover:text-blue-600 hover:font-medium cursor-pointer">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Download</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex-initial items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Rapat Evaluasi Interkoneksi Aplikasi Visa dan TKA
                              Online
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Lantai 10
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">13.00</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold hover:text-blue-600 hover:font-medium cursor-pointer">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Download</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 bg-white text-sm">
                        <div class="flex-initial items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Rapat Staf dan Pimpinan
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Lantai 8</p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">13.00</p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold  hover:text-blue-600 hover:font-medium cursor-pointer">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Download</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Notulensi;

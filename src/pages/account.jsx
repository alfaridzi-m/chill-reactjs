import Header from "../component/footer-header/header"
import Footer from "../component/footer-header/footer"
import { Pencil,File, X } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const AccountSkeleton = () => {
  return (
    <>
      <Header />
      <div className="bg-black text-white md:px-20 md:py-10 mt-16 md:mt-20 animate-pulse">
        <div className="flex flex-col gap-10">
          {/* Skeleton untuk Profil */}
          <div className="md:w-1/3 p-4 md:p-0">
            <div className="h-8 bg-zinc-700 rounded w-1/2 mb-8"></div>
            <div className="flex flex-row items-center md:gap-3 mb-8">
              <div className="bg-zinc-700 rounded-full w-16 h-16 flex-shrink-0"></div>
              <div className="flex flex-col ml-4 w-full">
                <div className="h-10 bg-zinc-700 rounded-full w-32 mb-2"></div>
                <div className="h-4 bg-zinc-700 rounded w-24"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="h-4 bg-zinc-700 rounded w-1/4"></div>
                <div className="h-10 bg-zinc-700 rounded w-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-zinc-700 rounded w-1/4"></div>
                <div className="h-10 bg-zinc-700 rounded w-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-zinc-700 rounded w-1/4"></div>
                <div className="h-10 bg-zinc-700 rounded w-full"></div>
              </div>
              <div className="h-10 bg-zinc-700 rounded-full w-28 md:mt-8"></div>
            </div>
          </div>
          {/* Skeleton untuk Daftar Saya */}
          <div className="md:w-full p-4 md:p-0">
            <div className="flex justify-between w-full items-center mb-4">
              <div className="h-8 bg-zinc-700 rounded w-1/3"></div>
              <div className="h-6 bg-zinc-700 rounded w-1/6"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="aspect-[2/3] bg-zinc-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const API_DAFTARSAYA_URL = "https://685f9399c55df675589eaf1d.mockapi.io/api/film/testung"
const API_USER_URL = "https://685f9399c55df675589eaf1d.mockapi.io/api/film/user"
const Account = () => {
const [daftarSaya, setDaftarSaya] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ username: "", email: "", password: "" })
  const [originalForm, setOriginalForm] = useState({})
  const [editable, setEditable] = useState({ username: false, email: false, password: false })
  const [isSaving, setIsSaving] = useState(false)
  const [feedback, setFeedback] = useState({ message: "", type: "" })

    const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
    }

    const toggleEdit = (field) =>{
        if (field === 'password' && !editable.password){
            setForm(prev => ({...prev, password: ""}))
        }
        setEditable((prev) => ({...prev, [field]: !prev[field]}))
    }

    const handleCancel = (field) =>{
        setForm((prev) => ({...prev, [field]: originalForm[field]}))
        setEditable((prev) => ({...prev, [field]: false}))
    }
    const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    setFeedback({ message: "", type: "" })

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) {
      setFeedback({ message: "Pengguna tidak ditemukan.", type: "error" })
      setIsSaving(false)
      return
    }

    const updatedData = {}
    if (form.username !== originalForm.username) updatedData.username = form.username
    if (form.email !== originalForm.email) updatedData.email = form.email
    if (form.password && form.password !== "●●●●●●●●") updatedData.password = form.password

    if (Object.keys(updatedData).length === 0) {
      setFeedback({ message: "Tidak ada perubahan untuk disimpan.", type: "info" })
      setIsSaving(false)
      return
    }

    try {
      await axios.put(`${API_USER_URL}/${currentUser.id}`, updatedData)
      const newCurrentUser = { ...currentUser, ...updatedData }
      localStorage.setItem("currentUser", JSON.stringify(newCurrentUser))
      const newFormState = { ...form, password: "●●●●●●●●" }
      setForm(newFormState)
      setOriginalForm(newFormState)
      setEditable({ username: false, email: false, password: false })
      setFeedback({ message: "Profil berhasil diperbarui!", type: "success" })

    } catch (err) {
      setFeedback({ message: "Gagal memperbarui profil.", type: "error" })
    } finally {
      setIsSaving(false)
    }
  }
    useEffect(() => {
    const loadInitialData = async () => {
      try {
        const storedUserString = localStorage.getItem("currentUser")
        if (storedUserString) {
          const storedUser = JSON.parse(storedUserString)
          const profileData = {
            username: storedUser.username,
            email: storedUser.email,
            password: "●●●●●●●●",
          }
          setForm(profileData)
          setOriginalForm(profileData)
        } else {
            setError("Pengguna tidak ditemukan, silakan login kembali.")
        }

        const response = await axios.get(API_DAFTARSAYA_URL)
        setDaftarSaya(response.data)

      } catch (err) {
        console.error("Gagal mengambil data", err)
        setError("Mohon maaf, data gagal dimuat. Silakan coba lagi.")
      } finally {
        setLoading(false)
      }
    }

    loadInitialData()
  }, [])

    if (loading) {
        return (
            <>
                <Header />
                <AccountSkeleton />
                <Footer />
            </>
        )
    }
    if (error) {
         return (
            <>
                <Header />
                <div className="mt-20 flex justify-center p-5">
                    <p className="text-red-500 text-xl">{error}</p>
                </div>
                <Footer />
            </>
        )
    }
    return (
    <>
    <Header />
      <div className="bg-black text-white md:px-20 md:py-10 mt-16 md:mt-20">
        <div className="flex flex-col gap-10">
          <div className="md:w-1/3 p-4 md:p-0">
            <h1 className="text-2xl font-bold mb-8">Profil Saya</h1>
            <div className="flex flex-row items-center md:gap-3 mb-8">
              <div className="bg-red-500 rounded-full w-16 h-16 flex-shrink-0"></div>
              <div className="flex flex-col ml-4">
                <button className="border-2 border-[#1b2edd] text-[#1b2edd] font-bold rounded-full px-4 py-2 cursor-pointer">
                  Ubah Foto
                </button>
                <div className="flex flex-row gap-2 items-center md:mt-1">
                  <File size={16} className="text-[#C1C2C4]" />
                  <p className="text-[#C1C2C4] text-sm">Maksimal 2MB</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <label className="text-[#C1C2C4] font-medium text-sm">Nama Pengguna</label>
                <input type="text" value={form.username} disabled={!editable.username} onChange={(e) => handleChange("username", e.target.value)} className="w-full h-10 bg-zinc-800 border border-zinc-700 rounded-md px-3 mt-1 disabled:opacity-70" />
                <button type="button" onClick={() => editable.username ? handleCancel('username') : toggleEdit('username')} className="absolute top-10 right-3 text-zinc-400 hover:text-white">
                  {editable.username ? <X size={18} /> : <Pencil size={16} />}
                </button>
              </div>
  
              <div className="relative">
                <label className="text-[#C1C2C4] font-medium text-sm">Email</label>
                <input type="email" value={form.email} disabled={!editable.email} onChange={(e) => handleChange("email", e.target.value)} className="w-full h-10 bg-zinc-800 border border-zinc-700 rounded-md px-3 mt-1 disabled:opacity-70" />
                <button type="button" onClick={() => editable.email ? handleCancel('email') : toggleEdit('email')} className="absolute top-10 right-3 text-zinc-400 hover:text-white">
                    {editable.email ? <X size={18} /> : <Pencil size={16} />}
                </button>
              </div>

              <div className="relative">
                <label className="font-medium text-sm text-[#C1C2C4]">Kata Sandi Baru</label>
                <input type="password" value={form.password} disabled={!editable.password} onChange={(e) => handleChange("password", e.target.value)} className="w-full h-10 bg-zinc-800 border border-zinc-700 rounded-md px-3 mt-1 disabled:opacity-70" placeholder="Masukkan kata sandi baru"/>
                <button type="button" onClick={() => editable.password ? handleCancel('password') : toggleEdit('password')} className="absolute top-10 right-3 text-zinc-400 hover:text-white">
                    {editable.password ? <X size={18} /> : <Pencil size={16} />}
                </button>
              </div>
              
              <button type="submit" disabled={isSaving} className="bg-[#1b2edd] w-fit text-white rounded-full px-4 py-2 md:mt-8 font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-900 cursor-pointer">
                {isSaving ? "Menyimpan..." : "Simpan"}
              </button>
              {feedback.message && (
                <p className={`text-center text-sm mt-2 ${
                    feedback.type === 'success' ? 'text-green-400' : 
                    feedback.type === 'error' ? 'text-red-400' : 'text-zinc-400'
                }`}>{feedback.message}</p>
              )}
            </form>
          </div>

          <div className="md:w-full p-4 md:p-0">
             <div className="flex justify-between w-full items-center mb-4">
                <h3 className="text-2xl font-bold">Daftar Saya</h3>
                <Link to="/daftarsaya" className="text-white hover:text-blue-500">Lihat Semua</Link>
            </div>
            {daftarSaya.length === 0 ? (
              <p className="text-zinc-400">Anda belum menambahkan film favorit.</p>
            ) : (
              <div className="flex flex-row gap-2">
                {daftarSaya.slice(0, 8).map((film) => (
                  <div key={film.tmdbId} className="relative hover:scale-105 cursor-pointer transition-all">
                    <img src={film.image} alt={film.title || "Film favorit"} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
    )
}

export default Account
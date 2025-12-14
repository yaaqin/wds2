import { WhatsappBusinessIcon } from 'hugeicons-react';
import React, { useState } from 'react';
import { axiosPublic } from '../../../../../libs/instance';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
    label?: string;
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, children, className = '', ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={`
                px-4 py-2
                rounded-lg
                bg-blue-600
                text-white
                font-medium
                hover:bg-blue-700
                active:bg-blue-800
                disabled:opacity-50
                disabled:cursor-not-allowed
                transition
                ${className}
            `}
        >
            {label ?? children}
        </button>
    );
};

interface SidebarItemProps {
    label: string;
    active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, active }) => (
    <div className={`py-2 px-4 ${active ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'} hover:bg-blue-50 cursor-pointer`}>
        {label}
    </div>
);

// Interface untuk form data
interface FormData {
    fullName: string;
    phone: string;
    email: string;
    needType: string;
    hasAgentCode: boolean;
    agentCode: string;
    addressDetail: string;
    packageType: string;
    promoCode: string;
}

// Daftar paket yang tersedia
const packageOptions = [
    { id: 'basic', name: 'Basic Package', speed: '10 Mbps', price: 'Rp 150.000/bulan' },
    { id: 'standard', name: 'Standard Package', speed: '25 Mbps', price: 'Rp 250.000/bulan' },
    { id: 'premium', name: 'Premium Package', speed: '50 Mbps', price: 'Rp 400.000/bulan' },
    { id: 'ultimate', name: 'Ultimate Package', speed: '100 Mbps', price: 'Rp 650.000/bulan' },
];

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phone: '',
        email: '',
        needType: '',
        hasAgentCode: false,
        agentCode: '',
        addressDetail: '',
        packageType: '',
        promoCode: '',
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error saat user mulai mengetik
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle checkbox change
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    // Handle need type selection
    const handleNeedTypeSelect = (type: string) => {
        setFormData(prev => ({
            ...prev,
            needType: type
        }));
        if (errors.needType) {
            setErrors(prev => ({
                ...prev,
                needType: ''
            }));
        }
    };

    // Handle package selection
    const handlePackageSelect = (packageId: string) => {
        setFormData(prev => ({
            ...prev,
            packageType: packageId
        }));
        if (errors.packageType) {
            setErrors(prev => ({
                ...prev,
                packageType: ''
            }));
        }
    };

    // Validasi form
    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Nama lengkap wajib diisi';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Nomor handphone wajib diisi';
        } else if (!/^62\d{9,13}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Format nomor handphone tidak valid (gunakan format 62...)';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email wajib diisi';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Format email tidak valid';
        }

        if (!formData.needType) {
            newErrors.needType = 'Pilih kebutuhan kamu';
        }

        if (!formData.addressDetail.trim()) {
            newErrors.addressDetail = 'Detail alamat wajib diisi';
        }

        if (!formData.packageType) {
            newErrors.packageType = 'Pilih paket terlebih dahulu';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('Mohon lengkapi semua field yang wajib diisi');
            return;
        }

        setLoading(true);

        try {
            // Prepare payload
            const payload = {
                fullname: formData.fullName,
                email: formData.email,
                phone: formData.phone.replace(/\s/g, ''),
                addressDetail: formData.addressDetail,
                sales: 'sugeng',
                internetType: formData.needType,
                // agentCode: formData.hasAgentCode ? formData.agentCode : null,
                paketType: formData.packageType,
                // promoCode: formData.promoCode || null,
            };

            console.log('Sending payload:', payload);

            const res = await axiosPublic.post('/user/registration', payload);

            alert('Registrasi berhasil!');
            // console.log('Response:', res.data);

            // Reset form jika berhasil
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                needType: '',
                hasAgentCode: false,
                agentCode: '',
                addressDetail: '',
                packageType: '',
                promoCode: '',
            });

        } catch (error: any) {
            console.error('Registration error:', error);
            alert(error?.response?.data?.message || 'Terjadi kesalahan saat registrasi');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full py-8 min-h-screen items-center justify-center bg-gradient-to-r from-rose-50 via-blue-50 to-indigo-100">
            <div className='max-w-[1480px] flex mx-auto shadow-xl rounded-xl bg-white/30 backdrop-blur-lg'>

                {/* Sidebar */}
                <div className="w-1/4 p-4">
                    <SidebarItem label="Data Diri" active={true} />
                    <SidebarItem label="Lokasi Pemasangan" active={false} />
                    <SidebarItem label="Pilih Paket" active={false} />
                    <SidebarItem label="Promo" active={false} />
                </div>

                {/* Main Content */}
                <div className="w-3/4 p-8">
                    <h2 className="text-2xl font-bold mb-6">Data Diri</h2>
                    <p className="text-gray-600 mb-4">Semua data ini wajib di isi untuk kebutuhan proses pemesanan Kamu.</p>

                    {/* Warning Message */}
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
                        <div className="flex">
                            <WhatsappBusinessIcon className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2" />
                            <p>Wajib mengisi data diri terlebih dahulu kemudian kamu bisa memilih lokasi pemasangan dan paket yang kamu inginkan</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Nama Lengkap */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Nama Lengkap*
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : ''}`}
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Nama lengkap kamu"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        {/* Nomor HP & Email */}
                        <div className="flex mb-4 space-x-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Nomor Handphone*
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''}`}
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="62 812 345 678"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                <p className="text-xs text-gray-500 mt-1">Pastikan nomor yang dimasukkan aktif Whatsapp</p>
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email*
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="emailkamu@domain.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <p className="text-xs text-gray-500 mt-1">Pastikan email kamu aktif untuk cek pesanan</p>
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        {/* Pilih Kebutuhan */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Pilih Kebutuhan Kamu*
                            </label>
                            <div className="flex space-x-4">
                                {[
                                    { icon: <WhatsappBusinessIcon />, label: 'Perumahan' },
                                    { icon: <WhatsappBusinessIcon />, label: 'Apartemen' },
                                    { icon: <WhatsappBusinessIcon />, label: 'Bisnis' },
                                ].map((need) => (
                                    <button
                                        key={need.label}
                                        type="button"
                                        onClick={() => handleNeedTypeSelect(need.label)}
                                        className={`flex items-center justify-center p-4 rounded-lg transition ${formData.needType === need.label ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {need.icon}
                                        <span className="ml-2">{need.label}</span>
                                    </button>
                                ))}
                            </div>
                            {errors.needType && <p className="text-red-500 text-xs mt-1">{errors.needType}</p>}
                        </div>

                        {/* Kode Agen */}
                        <div className="mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="hasAgentCode"
                                    className="form-checkbox"
                                    checked={formData.hasAgentCode}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="ml-2">Punya Kode Agen?</span>
                            </label>
                            {formData.hasAgentCode && (
                                <input
                                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="agentCode"
                                    placeholder="Masukkan kode agen"
                                    value={formData.agentCode}
                                    onChange={handleInputChange}
                                />
                            )}
                        </div>

                        {/* Lokasi Pemasangan */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold">Lokasi Pemasangan</h3>
                                <WhatsappBusinessIcon className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500 mb-3">Cek apakah HanaPlay sudah mencakup lokasi Kamu</p>

                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Detail Alamat*
                            </label>
                            <textarea
                                name="addressDetail"
                                placeholder="Contoh: Jl. Melati No. 10, RT 02/RW 05, Kel. Sukamaju, Kec. Cimanggis, Depok"
                                rows={4}
                                className={`w-full rounded-lg border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${errors.addressDetail ? 'border-red-500' : 'border-gray-300'}`}
                                value={formData.addressDetail}
                                onChange={handleInputChange}
                            />
                            {errors.addressDetail && <p className="text-red-500 text-xs mt-1">{errors.addressDetail}</p>}
                        </div>

                        {/* Pilih Paket */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold">Pilih Paket*</h3>
                                <WhatsappBusinessIcon className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Kami sediakan banyak paket sesuai dengan kebutuhan kamu</p>

                            <div className="grid grid-cols-2 gap-4">
                                {packageOptions.map((pkg) => (
                                    <button
                                        key={pkg.id}
                                        type="button"
                                        onClick={() => handlePackageSelect(pkg.id)}
                                        className={`p-4 rounded-lg border-2 transition text-left ${formData.packageType === pkg.id
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-gray-200 bg-white hover:border-blue-300'
                                            }`}
                                    >
                                        <div className="font-bold text-lg mb-1">{pkg.name}</div>
                                        <div className="text-blue-600 font-semibold mb-1">{pkg.speed}</div>
                                        <div className="text-gray-600 text-sm">{pkg.price}</div>
                                    </button>
                                ))}
                            </div>
                            {errors.packageType && <p className="text-red-500 text-xs mt-1">{errors.packageType}</p>}
                        </div>

                        {/* Promo */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold">Makin Hemat Dengan Promo</h3>
                                <WhatsappBusinessIcon className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500 mb-3">Yuk masukkan kode promo untuk mendapatkan promo menarik dari kami</p>
                            <div className="flex">
                                <input
                                    className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="promoCode"
                                    placeholder="Masukkan kode promo"
                                    value={formData.promoCode}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="button"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                                >
                                    Terapkan
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className='w-full'
                            disabled={loading}
                        >
                            {loading ? 'Mengirim...' : 'Kirim Pendaftaran'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
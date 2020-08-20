import axios from 'axios';

export const dangNhapAxios = (nguoiDung) => {
    return dispactch => {
        axios ({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: 'post',
            data: nguoiDung
        }).then (res => {
            console.log(res.data);

            localStorage.setItem('token', res.data);
            localStorage.setItem('userLogin', res.data);
        }).catch(err => {
            alert(err.response.data)
        })
    }
}
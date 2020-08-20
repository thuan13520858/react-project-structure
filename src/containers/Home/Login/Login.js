import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { dangNhapAxios } from '../../../redux/actions/QuanLyNguoiDungActions';


export default function Login() {
    let [nguoiDung, setNguoiDung] = useState({
        taiKhoan: '',
        matKhau: ''
    })

    console.log(nguoiDung)
    let handleChange = (e) => {
        let {value, name} = e.target;
        setNguoiDung({
            ...nguoiDung,
            [name]: value
        })
    }

    let dispatch = useDispatch();

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(dangNhapAxios(nguoiDung));
    }
    return (
        <div className = "container">
           <h3>Login</h3>
           <div className="form-group">
               <span>Tài khoản</span>
               <input type="text" className="form-control" name = "taiKhoan" onChange= {handleChange}/>
           </div>
           <div className="form-group">
               <span>Mật khẩu</span>
               <input type="text" className="form-control" name = "matKhau" onChange= {handleChange}/>
           </div>
           <div className="form-group">
               <button className="btn btn-success" onClick={handleSubmit}>Đăng nhập</button>
           </div>
        </div>
    )
}

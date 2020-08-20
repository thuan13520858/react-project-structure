import axios from 'axios'
import {layDanhSachPhim} from '../constants/QuanLyPhimType'

export const layDanhSachPhimAxios = () => {
    return dispatch => {
           axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        }).then (res => {
            console.log(res);
           dispatch ({
               type: layDanhSachPhim,
               dsPhim: res.data
           })
        }).catch(err => {
            console.log(err)
        })
    }
}
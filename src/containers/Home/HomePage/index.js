// import React, { Component } from 'react'

// export default class HomePage extends Component {
//     render() {
//         return (
//             <div>
//                 HomePage
//             </div>
//         )
//     }
// }
import React, {useState, useEffect} from 'react'
import { cleanup } from '@testing-library/react';

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import {layDanhSachPhimAxios} from '../../../redux/actions/QuanLyPhimActions'

export default function HomePage(props) {
    // useState thay thế this.state ứng với react class component
    let dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);

    let dispatch = useDispatch();

    let [state, setState] = useState({ // tương đương this.state = {}
        like: 1,
        dsPhim: []
    });

    // let [like, setLike] = useState(1);

    // useEffect chạy sau khi nội dung được render
    // useEffect(() => {
    //     console.log('useEffect thay thế cho dismount và didupdate')
    // })

    let renderPhim = () => {
        return dsPhim.map((phim, index) => {
           return (
             <div className="col-4">
               <div className="card text-white bg-primary">
                 <img className="card-img-top" src={phim.hinhAnh} alt />
                 <div className="card-body">
                   <h4 className="card-title">{phim.tenPhim}</h4>
                   <p className="card-text">{phim.moTa}</p>
                 </div>
               </div>
             </div>
           );
        })
    }

    useEffect(()=>{
        console.log('useEffect thay thế cho dismount');
        // call api
        // axios({
        //     url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }).then (res => {
        //     console.log(res);
        //     setState({
        //         dsPhim: res.data
        //     })
        // }).catch(err => {
        //     console.log(err)
        // })
        dispatch(layDanhSachPhimAxios())
    }, [])

    // useEffect(()=>{
    //     console.log('Didupdate sẽ thực thi tại đây')
    //     return () => {
    //        console.log('willunmount sẽ thực thi tại đây')
    //     }
    // }, [state.dsPhim])

    let handleLike = () => {
        setState({like: state.like +1})
    }
    return (
      <div classname="container">
        {/* <div className="card text-white bg-light" style = {{width: 200, height: 300}}>
          <img className="card-img-top" src="http://picsum.photos/200/200" alt />
          <div className="card-body">
            <h4 className="card-title text-dark">{state.like}</h4>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick = {handleLike}>Like</button> */}
        <div className="row">
            {renderPhim()}
        </div>
      </div>
    );
}

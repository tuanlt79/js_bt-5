function getELE(id) {
    return document.getElementById(id);
}

getELE("btnDTB").onclick = function () {
    var diemChuan = parseFloat(getELE("inputDiemChuan").value);
    var diemToan = parseFloat(getELE("inputToan").value);
    var diemLy = parseFloat(getELE("inputLy").value);
    var diemHoa = parseFloat(getELE("inputHoa").value);
    var doiTuong = parseFloat(getELE("selectDT").value);
    var khuVuc = parseFloat(getELE("selectKV").value);
    //Gán hàm tính điểm trung bình
    diemTB = tinhDTB(diemToan, diemLy, diemHoa);
    if (khuVuc == 2) {
        diemTB = diemTB + 2;
        tongDiem = tinhDoiTuong(doiTuong, diemTB); 
    }
    else if (khuVuc == 1) {
        diemTB = diemTB + 1;
        tongDiem = tinhDoiTuong(doiTuong, diemTB);
    }
    else if (khuVuc == 0.5) {
        diemTB = diemTB + 0.5;
        tongDiem = tinhDoiTuong(doiTuong, diemTB);
    }
    else if (khuVuc == 0) {
        tongDiem = tinhDoiTuong(doiTuong, diemTB);
    }
    else {
        alert('Vui lòng chọn Khu Vực')
    }
    if (diemChuan <= tongDiem && diemLy != 0 && diemHoa != 0 && diemToan != 0) {
        getELE('thongBaoKQ').innerHTML = ('Bạn Đậu<br>' + 'Điểm Trung Bình 3 môn của bạn: '+(tongDiem).toFixed(2)+' Điểm');
    }
    
    else {
        getELE('thongBaoKQ').innerHTML = ('Bạn Rớt <br> Vì có điểm 0 liệt <br> Hoặc Không đủ điểm chuẩn<br>'+ 'Điểm Trung Bình 3 môn của bạn: ' + (tongDiem).toFixed(2)+ ' Điểm');
    }  
}
function tinhDTB(diemToan, diemLy, diemHoa) {
    var diemtb = 0;
    if (0 <= diemToan && diemToan <= 10 && 0 <= diemLy && diemLy <= 10 && 0 <= diemHoa && diemHoa <= 10) {
        var diemTB = (diemToan + diemLy + diemHoa) / 3;
    }
    else {
        alert('Vui lòng nhập điểm 3 môn Hoặc Nhập điểm bị sai')
    }
    return diemTB;
}
function tinhDoiTuong(doiTuong,diemTB) {
    if (doiTuong == 0) {
        diemTB;
    }
    else if (doiTuong == 1) {
        diemTB = diemTB + 1;
    }
    else if (doiTuong == 1.5) {
        diemTB = diemTB + 1.5;
    }
    else if (doiTuong == 2.5) {
        diemTB = diemTB + 2.5;
    }
    else {
        alert('Vui lòng chọn đối tượng');
    }
    return diemTB;
    
}

// ------------------------------TÍNH TIỀN ĐIỆN-------------------------------------------------------------
const kwDau = 500;
const kwThu2 = 650;
const kwThu3 = 850;
const kwThu4 = 1100;
const kwCL = 1300;

getELE("btnTinhTien").addEventListener("click", function () {
    var tenKH = getELE("inputName").value;
    var soKW = parseFloat(getELE("inputKW").value);
    tongTien = tinhTienTheoKW(soKW, kwDau, kwThu2, kwThu3, kwThu4, kwCL);
    getELE("txtThongBao").innerHTML= ("Khách Hàng: "+ tenKH +'<br>Tổng Tiền Điện: '+tongTien+ ' VNĐ');
});

function tinhTienTheoKW(soKW, kwDau_1, kwThu_2, kwThu_3, kwThu_4, kwConLai) {
    var tongTienDien = 0;
    if (soKW <= 50) {
        tongTienDien = kwDau_1 * soKW;
        console.log(tongTienDien);
    }
    else if (50 < soKW && soKW <= 100) {
        tongTienDien = (kwDau_1 * 50) + (soKW - 50) * kwThu_2;
        console.log(tongTienDien);
    }
    else if (100 < soKW && soKW <= 150) {
        tongTienDien = (kwDau_1 * 50)  + (kwThu2 * 100) + (soKW - 100) * kwThu_3;
        console.log(tongTienDien);
    }
    else if (150 < soKW && soKW <= 350) {
        tongTienDien = (kwDau_1 * 50) + (kwThu2 * 100) + (150 * kwThu_3) + (soKW - 150) * kwThu_4;
        console.log(tongTienDien);
    }
 
    else if (soKW > 350) {
        tongTienDien = (kwDau_1 * 50) + (kwThu2 * 100) + (150 * kwThu_3) + (350 * kwThu_4)+(soKW-350)*kwCL;
        console.log(tongTienDien);
    }
    else {
        alert('Vui lòng nhập lại số KW')
    }
    return tongTienDien;
}
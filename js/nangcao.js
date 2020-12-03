function getELE(id) {
    return document.getElementById(id);
}

const muc60 = (5 / 100);
const muc120 = (10 / 100);
const muc216 = (15 / 100);
const muc384 = (20 / 100);
const muc624 = (25 / 100);
const muc960 = (30 / 100);
const mucTren960 = (35 / 100);

getELE("btnThuNhap").addEventListener("click", function () {
    var name = getELE("inputName").value;
    var thuNhap = parseFloat(getELE("inputThuNhap").value);
    var phuThuoc = parseFloat(getELE("inputPhuThuoc").value);
    tongTraThue = tinhTongThue(thuNhap, phuThuoc, muc60, muc120, muc216, muc384, muc624, muc960, mucTren960);
    getELE("txtKQ").innerHTML=("Thuế TNCN "+ name +" phải trả: "+ tongTraThue+' Triệu VNĐ');
});

function tinhTongThue(tongTN, nguoiPhuThuoc, muc_60, muc_120, muc_216, muc_384, muc_624, muc_960, mucTren_960) {
    var tongThueChiu = 0;
    if (tongTN <= 60) {
        tongThueChiu = ((tongTN - 4) - (nguoiPhuThuoc * 1.6)) * muc_60;
    }
    else if (60 < tongTN && tongTN <= 120) {
        tongThueChiu = ((tongTN - 4) - (nguoiPhuThuoc * 1.6)) * muc_120;
    }
    else if (120 < tongTN && tongTN <= 216) {
        tongThueChiu = ((tongTN - 4) - (nguoiPhuThuoc * 1.6)) * muc_216;
    }
    else if (216 < tongTN && tongTN <= 384) {
        tongThueChiu = ((tongTN - 4) - (nguoiPhuThuoc * 1.6)) * muc_384;
    }
    else if (384 < tongTN && tongTN <= 624) {
        tongThueChiu = ((tongTN - 4) - (nguoiPhuThuoc * 1.6)) * muc_624;
    }
    else if (624 < tongTN && tongTN <= 960) {
        tongThueChiu = ((tongTN - 4) - (nguoiPhuThuoc * 1.6)) * muc_960;
    }
    else if (960 < tongTN) {
        tongThueChiu = ((tongTN - 4) - (nguoiPhuThuoc * 1.6)) * mucTren_960;
    }
    return tongThueChiu;
}

// ----------------------------------------Tính Tiền Cáp-----------------------------------------------------

getELE("goiGD").addEventListener("click", function () {   
    getELE("inputKN").setAttribute("disabled",true);
});
getELE("goiDN").addEventListener("click", function () { 
    getELE("inputKN").removeAttribute("disabled");
});

const gdHD = 4.5;
const gdDV = 20.5;
const gdKenhCC = 7.5;

const dnHD = 15;
const dnDV = 75;
const dnDV_them = 5;
const dnKenhCC = 50;

getELE("btnTinh").addEventListener("click", function () {
    var maKH = getELE("inputKH").value;
    var soKenh = parseInt(getELE("inputKenh").value);
    var ketNoi = parseInt(getELE("inputKN").value);
    
    var goiGiaDinh = getELE("goiGD");
    var goi_DN = getELE("goiDN");

    console.log(goiGiaDinh.checked, goi_DN.checked);
    var loaiGoi = '';
    
    loaiGoi = kiemTraGoi(goiGiaDinh, goi_DN);
    console.log(loaiGoi);
    
    var tongTien = 0;
    switch (loaiGoi) {
        case "goiGD":
            tongTien = tinhTienCapGD(gdHD, gdDV, soKenh, gdKenhCC);
            getELE("txtThongBao").innerHTML=('Tổng tiền cáp thanh toán gói Gia Đình '+maKH+' : $'+ tongTien);
            break;
        case "goiDN":
            tongTien = tinhTienCapDN(dnHD, dnDV, dnDV_them, soKenh, ketNoi, dnKenhCC);
            getELE("txtThongBao").innerHTML=('Tổng tiền cáp thanh toán gói Doanh Nghiệp '+maKH+' : $'+ tongTien);
            break;
    }
});

function kiemTraGoi(GD,DN) {
    if (GD.checked) {
        return "goiGD";
    }
    else if (DN.checked) {
        return "goiDN";
    }
    else {
        alert("Chọn Lại Gói");
    }
}
function tinhTienCapGD(hoaDon, dichVu, soThueKenh, thueKenh) {
    var tongTien = 0;
        tongTien = hoaDon + dichVu + soThueKenh * thueKenh;
    return tongTien;
}
function tinhTienCapDN(hoaDon, dichVu, dichVuThem, soThueKenh,soKetNoi, thueKenh) {
    var tongTien = 0;
    if (soKetNoi <= 10) {
        tongTien = hoaDon + dichVu  + soThueKenh * thueKenh;
    }
    else if (soKetNoi > 10) {
        tongTien = hoaDon + dichVu + (soKetNoi-10)*dichVuThem +soThueKenh * thueKenh;
    }
    else {
        alert('Vui lòng nhập Số kết nối');
    }
    return tongTien;
}
function kiemtrama() {
    let maukt = /([0-9]{8})$/
    if ($("#masv").val() == "") {
        $("#tbmasv").html("Không Được Rỗng")
        return false;
    }
    if (!maukt.test($("#masv").val())) {
        $("#tbmasv").html("Nhập đúng 8 kí tự số")
        return false;
    }
    $("#tbmasv").html("OK")
    return true;
}

function kiemtraTen() {
    let maukt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if ($("#tensv").val() == "") {
        $("#tbtensv").html("Không Được Rỗng");
        return false;
    }
    if (!maukt.test($("#tensv").val())) {
        $("#tbtensv").html("Mỗi Kí Tự Đầu Viết Hoa Và Không Sử Dụng Số")
        return false;
    }
    $("#tbtensv").html("OK");
    return true;
}

function kiemtraemail() {
    let maukt = /(^[a-z][a-z0-9]+)(@gmail.com)$/
    if ($("#email").val() == "") {
        $("#tbemail").html("Không Được Rỗng");
        return false;
    }
    if (!maukt.test($("#email").val())) {
        $("#tbemail").html("VD : vutienduc26122002@gmail.com");
        return false;
    }
    $("#tbemail").html("OK");
    return true;
}
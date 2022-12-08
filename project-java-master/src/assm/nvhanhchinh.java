package assm;

public class nvhanhchinh extends NhanVien {
    private double ngaycong;

    public double getNgaycong() {
        return ngaycong;
    }

    public void setNgaycong(double ngaycong) {
        this.ngaycong = ngaycong;
    }

    public nvhanhchinh(String maNV, String hoTen, double luongcoban, String phongban, double ngaycong) {
        super(maNV, hoTen, luongcoban, phongban);
        this.ngaycong = ngaycong;
    }

    @Override
    double getluong() {
        return getLuongcoban() * ngaycong;
    }

}

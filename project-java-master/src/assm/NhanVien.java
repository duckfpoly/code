package assm;

public abstract class NhanVien {
    private String maNV;
    private String hoTen;
    private double luongcoban;
    private String phongban;

    public NhanVien(String maNV, String hoTen, double luongcoban, String phongban) {
        this.maNV = maNV;
        this.hoTen = hoTen;
        this.luongcoban = luongcoban;
        this.phongban = phongban;
    }

    public String getmaNV() {
        return maNV;
    }

    public void setmaNV(String maNV) {
        this.maNV = maNV;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public double getLuongcoban() {
        return luongcoban;
    }

    public void setLuongcoban(double luongcoban) {
        this.luongcoban = luongcoban;
    }

    public String getPhongban() {
        return phongban;
    }

    public void setPhongban(String phongban) {
        this.phongban = phongban;
    }

    abstract double getluong();
}
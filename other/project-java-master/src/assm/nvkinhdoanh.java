package assm;

public class nvkinhdoanh extends NhanVien {
    private double luongkinhdoanh;

    public nvkinhdoanh(String maNV, String hoTen, double luongcoban, String phongban, double luongkinhdoanh) {
        super(maNV, hoTen, luongcoban, phongban);
        this.luongkinhdoanh = luongkinhdoanh;
    }

    public double getLuongkinhdoanh() {
        return luongkinhdoanh;
    }

    public void setLuongkinhdoanh(double luongkinhdoanh) {
        this.luongkinhdoanh = luongkinhdoanh;
    }

    @Override
    double getluong() {
        return getLuongcoban() + luongkinhdoanh;
    }
}

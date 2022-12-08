package assm;
import java.util.*;
public class QuanLyNhanVien{
    ArrayList<NhanVien> dsnv = new ArrayList<>();
    public void input() {
        do {
            Scanner sc = new Scanner(System.in);
            System.out.print("Mã NV: ");
            String maNV = sc.nextLine();
            if (maNV.equals("") || maNV == null){
                break;
            }
            System.out.print("Họ tên NV: ");
            String name = sc.nextLine();
            System.out.print("Lương cơ bản: ");
            double luongcoban = sc.nextDouble();
            System.out.print("Phòng ban ( hành chính / kinh doanh ) : ");
            String phongban = new Scanner(System.in).nextLine();
            if (phongban.equalsIgnoreCase("Hành chính")){
                System.out.print("Nhập ngày công: ");
                double ngaycong = sc.nextDouble();
                NhanVien newNV = new nvhanhchinh(maNV,name,luongcoban,phongban,ngaycong);
                dsnv.add(newNV);
            }
            else if (phongban.equalsIgnoreCase("Kinh doanh")) {
                System.out.print("Nhập vào lương kinh doanh: ");
                double luongkd = sc.nextDouble();
                NhanVien newNV = new nvkinhdoanh(maNV,name,luongcoban,phongban,luongkd);
                dsnv.add(newNV);
            }
            else {
                System.out.print("Vui lòng nhập lại phòng ban và các thông tin khác");
            }
        }
        while (true);
    }
    public void output(){
        for (NhanVien nv : dsnv) {
            System.out.println("Mã NV: " + nv.getmaNV() + " | " + "Họ tên: " + nv.getHoTen() + " | " + "Phòng ban: " + nv.getPhongban() + " | " + "Lương: " + nv.getluong());
            //System.out.printf("Ma nhan vien: %s | Ho ten: %s | Phong ban: %s | Luong: %.2f\n", nv.getmaNV(), nv.getHoTen(), nv.getPhongban(), nv.getLuongcoban());
        }
    }
    public void timNV() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập mã NV cần tìm: ");
        String maNV = sc.nextLine();
        boolean tim = false;
        for (NhanVien nv : dsnv) {
            if (maNV.equalsIgnoreCase(nv.getmaNV())){
                System.out.println("Mã NV: " + nv.getmaNV() + " | " + "Họ tên: " + nv.getHoTen() + " | " + "Phòng ban: " + nv.getPhongban() + " | " + "Lương: " + nv.getluong());
                tim = true;
                break;
            }
        }
        if (tim == false) {
            System.out.println("Nhân viên không tồn tại !!! ");
        }
    }
    public void xoaNV () {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập mã NV cần xoá: ");
        String maNV = sc.nextLine();
        boolean tim = false;
        for (NhanVien nv : dsnv) {
            if (maNV.equalsIgnoreCase(nv.getmaNV())){
                dsnv.remove(nv);
                tim = true;
                break;
            }
        }
        if (!tim) {
            System.out.println("Nhân viên không tồn tại !!! ");
        }
        else {
            System.out.println("Nhân viên đã được xoá !");
        }
    }
    public void capNhatNV() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập mã NV cần cập nhật: ");
        String IDFind = sc.nextLine();
        NhanVien found = null;
        int index = 0;
        for (NhanVien nv : dsnv) {
            if (IDFind.equalsIgnoreCase(nv.getmaNV())) {
                found = nv;
                index = dsnv.indexOf(nv);
                break;
            }
        }
        if (found != null) {
            System.out.print("Mã NV: ");
            String ID = sc.nextLine();
            if (ID.equals("") || ID == null) {
                ID = found.getmaNV();
            }
            System.out.print("Họ tên nhân viên: ");
            String name = sc.nextLine();
            if (name.equals("") || name == null) {
                name = found.getHoTen();
            }
            System.out.print("Lương cơ bản: ");
            String luongCoBan = sc.nextLine();
            if (luongCoBan.equals("") || luongCoBan == null) {
                luongCoBan = String.valueOf(found.getLuongcoban());
            }
            if (found instanceof nvhanhchinh) {
                System.out.print("Ngày công: ");
                String ngayCong = sc.nextLine();
                if (ngayCong.equals("") || ngayCong == null) {
                    ngayCong = String.valueOf(((nvhanhchinh) found).getNgaycong());
                }
                NhanVien nv = new nvhanhchinh(ID, name, Double.parseDouble(luongCoBan), "Hành chính", Double.parseDouble(ngayCong));
                dsnv.set(index, nv);
            }
            if (found instanceof nvkinhdoanh) {
                System.out.print("Lương kinh doanh: ");
                String luongKinhDoanh = sc.nextLine();
                if (luongKinhDoanh.equals("") || luongKinhDoanh == null) {
                    luongKinhDoanh = String.valueOf(((nvkinhdoanh) found).getLuongcoban());
                }
                NhanVien nv = new nvkinhdoanh(ID, name, Double.parseDouble(luongCoBan), "Kinh doanh", Double.parseDouble(luongKinhDoanh));
                dsnv.set(index, nv);
            }
        }else {
            System.out.println("Không tồn tại nhân viên");
        }
    }
    public void sortName() {
        Comparator<NhanVien> comp = new Comparator<NhanVien>() {
            @Override
            public int compare(NhanVien nv1, NhanVien nv2) {
                return nv1.getHoTen().compareTo(nv2.getHoTen());
            }
        };
        Collections.sort(dsnv, comp);
        output();
    }
    public void sortLuong() {
        Comparator<NhanVien> comp = new Comparator<NhanVien>() {
            @Override
            public int compare(NhanVien nv1, NhanVien nv2) {
                if (nv1.getLuongcoban() > nv2.getLuongcoban()) return 1;
                else return -1;
            }
        };
        Collections.sort(dsnv, comp);
        output();
    }
    public void xuatTop5() {
        Collections.sort(dsnv, (a, b) -> (int) (b.getLuongcoban() - a.getLuongcoban()));
        for (int i = 0; i < 5; i++) {
            System.out.printf("Ma nhan vien: %s | Ho ten: %s | Phong ban: %s | Luong: %.2f\n", dsnv.get(i).getmaNV(), dsnv.get(i).getHoTen(), dsnv.get(i).getPhongban(), dsnv.get(i).getLuongcoban());
        }
    }
    public void menu(){
        Scanner sc = new Scanner(System.in);
        int chon = 0;
        do {
            System.out.println("Menu Chương Trình");
            System.out.println("1. Nhập danh sách nhân viên.");
            System.out.println("2. Xuất thông tin các nhân viên.");
            System.out.println("3. Tìm nhân viên theo mã.");
            System.out.println("4. Xoá nhân viên theo mã.");
            System.out.println("5. Cập nhật thông tin nhân viên theo mã.");
            System.out.println("6. Sắp xếp nhân viên theo họ và tên.");
            System.out.println("7. Sắp xếp nhân viên theo thu nhập");
            System.out.println("8. Xuất 5 nhân viên có thu nhập cao nhất");
            System.out.println("0. Thoát");
            System.out.print("Xin mời bạn chọn: ");
            chon = sc.nextInt();
            if (chon != 0) {
                switch (chon) {
                    case 0:
                        break;
                    case 1:
                        input();
                        break;
                    case 2:
                        output();
                        break;
                    case 3:
                        timNV();
                        break;
                    case 4:
                        xoaNV();
                        break;
                    case 5:
                        capNhatNV();
                        break;
                    case 6:
                        sortName();
                        break;
                    case 7:
                        sortLuong();
                        break;
                    case 8:
                        xuatTop5();
                        break;
                }
            }
        }
        while (chon != 0 || chon > 8);
    }
}

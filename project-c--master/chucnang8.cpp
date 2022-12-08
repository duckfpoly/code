#include<iostream>
#include<string.h>

using namespace std;

struct Sinhvien{
	char HotenSinhvien[50];
	char Masosv[10];
	float DiemTB;
};
void Chucnang8() {
	struct Sinhvien dssv[3];
	for (int i = 0; i < 4; i++){
		cout << "Ho ten sinh vien thu " << i + 1 << ":";
		gets(dssv[i].HotenSinhvien);
		cout << endl;
		cout << "Ma so sinh vien thu " << i + 1 << ":";
		gets(dssv[i].Masosv);
		cout << endl;
		cout << "Diem sinh vien thu " << i + 1 << ":";
		cout << dssv[i].DiemTB;
		cout << endl;
		getchar();
	}
	cout << "Danh sach sinh vien!" << endl;
	for ( int i = 0; i < 5; i++){
		cout << "Ho ten: " << dssv[i].HotenSinhvien << endl;
		cout << "Ma so sinh vien: " << dssv[i].Masosv << endl;
		cout << "Diem TB: " << dssv[i].DiemTB << endl;
		if (dssv[i].DiemTB >= 9){
			cout << "Hoc luc: Xuat sac" << endl;
		}
		else if (dssv[i].DiemTB >= 8){
			cout << "Hoc luc: Gioi" << endl;
		}
		else if (dssv[i].DiemTB >= 6.5){
			cout << "Hoc luc: Kha" << endl;
		}
		else if (dssv[i].DiemTB >= 5){
			cout << "Hoc luc: Trung Binh" << endl;
		}
		else {
			cout << "Hoc luc: Yeu " << endl;
		}
	}	
// Sap xep
	for ( int i = 0; i < 4; i++ ){
		for ( int j = 0; j < 5; i++ ){
			if (dssv[i].DiemTB < dssv[j].DiemTB){

				//ten
				char ten[50];
				strcpy(ten,dssv[i].HotenSinhvien);
				strcpy(dssv[i].HotenSinhvien,dssv[j].HotenSinhvien);
				strcpy(dssv[j].HotenSinhvien,ten);

				//diem
				float diem = dssv[i].DiemTB;
				dssv[i].DiemTB = dssv[j].DiemTB;
				dssv[j].DiemTB = diem;

				//Mssv
				char mssv[10];
				strcpy(mssv,dssv[i].Masosv);
				strcpy(dssv[i].Masosv,dssv[j].Masosv);
				strcpy(dssv[j].Masosv,mssv);

				//lop
				// char Lop[10];
				// strcpy(Lop,dssv[i].Svlop);
				// strcpy(dssv[i].Svlop,dssv[j].Svlop);
				// strcpy(dssv[j].Svlop,Lop);

			}		
		}
	}
}
int main () {
	Chucnang8();
	return 0;
}


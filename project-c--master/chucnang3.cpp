#include<iostream>
#include<math.h>

using namespace std;

void Chucnang3(){
	int Giobatdau; 
	int Gioketthuc;


	do{
	cout << "Nhap vao gio bat dau: ";
	cin >> Giobatdau;
	cout << "Nhap vao gio ket thuc: ";
	cin >> Gioketthuc;
	if (Giobatdau < 12 && Gioketthuc > 23){
		cout << "Quan hoat dong tu 12h -> 23h. Xin vui long nhap lai!";
	}
	}
	while (Giobatdau < 12 && Gioketthuc > 23);


    float Tongtien;
	int Sogio = Gioketthuc - Giobatdau;
	cout << "Tong so gio cua quy khach la: " << Sogio << endl;
	if ( Sogio <= 3 ) {
		Tongtien = Sogio * 150000;
	} 
	else {
		Tongtien = 3*150000 + (Sogio - 3)*150000*0.7;
	}
	if (Giobatdau >= 14 && Giobatdau <= 17) {
		Tongtien = Tongtien*0.9;
	}

 	cout << "So tien khach phai tra la: " << Tongtien;
}

int main () {
    Chucnang3();
    return 0;
}


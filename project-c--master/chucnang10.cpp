#include<iostream>
#include<math.h>

using namespace std;

void Chucnang10() {

    float tongtuso, tongmauso, hieutuso, hieumauso, tichtuso, tichmauso, thuongtuso, thuongmauso;
    int Tso1, Tso2, Mso1, Mso2;
        cout << "Nhap phan so" << endl;
		cout << "Phan so thu nhat" << endl;
		cout << "Tu so la: "; cin >> Tso1;
		cout << "Mau so la: ";cin >> Mso1;
		cout << endl;
		cout << "Phan so thu hai" << endl;
		cout << "Tu so la: "; cin >> Tso2;
		cout << "Mau so la: ";cin >> Mso2;
		cout << endl;
		
		if (Mso1 == 0 && Mso2 == 0) {
			cout << "Phan so khong hop le!!";
		}
		
		cout << "Hai phan so la: " << endl;
		cout << "Phan so 1: " << Tso1 << "/" << Mso1 << endl;
		cout << "Phan so 2: " << Tso2 << "/" << Mso2 << endl;
		
		tongtuso  = Tso1 * Mso2 + Mso1 * Tso2;
		tongmauso = Mso1 * Mso2;
		
		hieutuso  = Tso1 * Mso2 - Mso1 * Tso2;
		hieumauso = Mso1 * Mso2;
		
		tichtuso  = Tso1 * Tso2;
		tichmauso = Mso1 * Mso2;
		
		thuongtuso  = Tso1 * Mso2;
		thuongmauso = Mso1 * Tso2;
		
		cout << "Tong cua hai phan so la: " << tongtuso << "/" << tongmauso << endl;
		cout << "Hieu cua hai phan so la: " << hieutuso << "/" << hieumauso << endl;
		cout << "Tich cua hai phan so la: " << tichtuso << "/" << tichmauso << endl;
		cout << "Thuong cua hai phan so la: " << thuongtuso << "/" << thuongmauso << endl;
}

int main () {
    Chucnang10();
    return 0;
}
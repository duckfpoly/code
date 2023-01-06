#include<iostream>

using namespace std;

void Chucnang4() {
    int a; 
    float tien;
    float bac1 = 1678; 
    float bac2 = 1734; 
    float bac3 = 2014; 
    float bac4 = 2536; 
    float bac5 = 2834; 
    float bac6 = 2927;
        cout << "Nhap vao so kwH dien su dung: ";
		cin >> a;
		cout << endl;

			if ( a < 0 ) {
			cout << "Gia tri khong hop le!!!";
			}

			else if ( a <= 50) {
			tien = bac1 * a;
			cout << "So tien can phai tra la: " << tien << " dong"  << endl;
			}

			else if (a <= 100) {
			tien = 50 * bac1 + ( a - 50 ) * bac2;
			cout << "So tien can phai tra la: " << tien << " dong" << endl;
			}

			else if (a <= 200) {
			tien = 50 * bac1 + 50 * bac2 + (a - 100) * bac3;
			cout << "So tien can phai tra la: " << tien << " dong"  << endl;
			}

			else if (a <= 300) {
			tien = 50 * bac1 + 50 * bac2 + 100 * bac3 + ( a - 200) * bac4;
			cout << "So tien can phai tra la: " << tien << " dong" << endl;
			}

			else if ( a <= 400) {
			tien = 50 * bac1 + 50 * bac2 + 100 * bac3 + 100 * bac4 + ( a - 300 ) * bac5;
			cout << "So tien can phai tra la: " << tien << " dong" << endl;
			}
			
			else {
			tien = 50 * bac1 + 50 * bac2 + 100 * bac3 + 100 * bac4 + 100 * bac5 + ( a - 400 ) * bac6;
			cout << "So tien can phai tra la: " << tien << " dong" << endl;
			}
}

int main () {
    Chucnang4();
    return 0;
}
#include<iostream>
#include<math.h>

using namespace std;

void Chucnang6() {
    int tienvay;
    cout << "Nhap so tien muon vay: ";
    cin >> tienvay;
    cout << endl;
    int tienlai, tiengoc, tientra, tiencon;
    tiengoc = tienvay / 12;
    tiencon = tienvay;
    for (int i = 1; i <= 12; i++){
        tienlai = tiencon * 0.05;
        tientra = tiengoc + tienlai;
        tiencon = tiencon - tiengoc;
        cout << "- Thang: " << i << endl;
        cout << "  + Tien lai phai tra: " << tienlai << " vnd " << endl;
        cout << "  + Tien goc phai tra: " << tiengoc << " vnd " << endl;
        cout << "  + So tien phai tra:  " << tientra << " vnd " <<endl;
        cout << "  + So tien con lai:   " << tiencon << " vnd " <<endl;
        cout << endl; 
    }
}

int main () {
	Chucnang6();
    return 0;
}
#include<iostream>
#include<stdlib.h>
#include<time.h>

using namespace std;

void Chucnang9() {
    int cso1, cso2;
    int random = 0;
    cout << "Game FPOLY";
    cout << "Xin moi nhap so cua ban!" << endl;
    cout << "So thu nhat: ";
    cin >> cso1;
    cout << "So thu hai: ";
    cin >> cso2;
    srand((int) time(0));
    int ketqua[2];
    for (int i = 0; i < 2; i++){
        int kq = rand()%15 + 1;
        ketqua[i] = kq;
    }
    for (int i = 0; i < 2; i++){
        if (cso1 == ketqua[i] || cso2 == ketqua[i]){
            randomvs++;
        }
    }
    cout << "Ket qua quay so" << endl;
    cout << "So may man dau tien: " << ketqua[0] << endl;
    cout << "So may man thu hai: " << ketqua[1] << endl;
    if (random == 2){
        cout << "Giai dac biet" << endl;
    }
    else if (random == 1){
        cout << "Giai nhat" << endl;
    }
    else {
        cout << "Chuc ban may man lan sau" << endl; 
    }
}

int main () {
    Chucnang9();
    return 0;
}
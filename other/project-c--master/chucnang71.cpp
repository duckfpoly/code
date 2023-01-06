#include<iostream>

using namespace std;

void Chucnang7() {
    float sotiencan = 500;
    float maxphantramvay;
    cout << "Nhap phan tram vay toi da: ";
    cin >> maxphantramvay;
    float sotienvay = 500 * maxphantramvay / 100;
    float sotienco = 500 - sotienvay;
    int thoigianvaynam = 24;
    int thoigianvaythang = 288;
    float goctratheonam = sotienvay / 24;
    float goctratheothang = sotienvay / thoigianvaythang;
    cout << "So tien can co " << sotienco << endl;
    for ( int i = 1; i < 24; i++){
        float lainam = 0.072 * sotienvay;
        float laithang = lainam / 12;
        float tongtrathang = goctratheothang + laithang;
        cout << "Nam thu " << i << ", moi thang tra " << tongtrathang << endl;
        sotienvay = sotienvay - goctratheonam;
    }   
}
int main () {
    Chucnang7();
    return 0;
}
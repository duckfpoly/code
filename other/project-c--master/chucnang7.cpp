#include<iostream>
#include<math.h>

using namespace std;

void chucnang7 (double tientragop){   
    int nam = 1;
    int tienlai;
    int tiengoc = tientragop / 288; //24 nam = 288 tháng; 7,2% <-> 6% tháng ( 7,2 * 10 / 12 )
    int tientra;
    int tiencon;
    tiencon = tientragop;
    for (int i = 1; i <= 288; i++){
        tienlai = tiencon * 0.06; // 6% lãi suất / tháng.
        tientra = tiengoc + tienlai;
        tiencon = tiencon - tiengoc;
        cout << "Ki han : " << i << endl;   
        cout << "Tien lai: " << tienlai << endl;
        cout << "Tien goc: " << tiengoc << endl;
        cout << "Tien tra: " << tientra << endl;
        cout << "Tien con: " << tiencon << endl;
        if (i % 12 == 0 ){
            nam++;
            cout << "Ket thuc: " << nam << " nam" << endl;
            cout << endl;
        }
    }
}
int main (){
    double tienxe;
    double tientragop = 0; // tientragop = tienvay
    double tientratruoc = 0;
    double phantramtratruoc;
    double phantramtragop;
    cout << "Vay tien mua xe" << endl;
    cout << "Nhap vao gia chiec xe: ";
    cin >> tienxe;
    cout << endl;
    do{
    	cout << "Ban muon vay bao nhieu % ? ( han muc 80% ) " << endl;
        cout << "Phan tram muon vay (%): ";
        cin >> phantramtragop;
    } 
    while (phantramtragop > 80) ;
    phantramtratruoc = 100 - phantramtragop;
    tientratruoc = tienxe * (phantramtratruoc); //phantramtratruoc
    tientragop = tienxe* ( phantramtragop / 100 ); //phantramtrasau
    cout << "So tien ban vay tra gop la: " << tientragop << endl;
    tientratruoc = tienxe - tientragop;
    cout << "So tien ban phai tra truoc la: " << tientratruoc << endl;
    
    if ( tientragop > 500000){
        tientratruoc = tienxe - tientragop;
		chucnang7(tientragop);
        cout << "Tien phai tra truoc: " << tientratruoc << endl;
        cout << "Tien tra gop: " << tientragop << endl;
    }
    else {
		chucnang7(tientragop);
        cout << "Tien phai tra truoc: " << tientratruoc << endl;
        cout << "Tien tra gop: " << tientragop << endl;
    }
    system("pause");
    return 0;
}

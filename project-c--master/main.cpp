#include<iostream>
#include<math.h>
#include<stdlib.h>
#include<time.h>
#include<string.h>
#include<algorithm>

using namespace std;

void Chucnang1 () {
    int n,x,count;  
        cout << "Nhap vao mot so: ";
        cin >> n;
        
//Kiem tra so nguyen        
        if (n > 0) {
            cout << "=> "<< n << " la so nguyen duong." << endl;
        }
        else {
            cout << "=> "<< n << " la so nguyen am." << endl;
        }
        
//Kiem tra so chinh phuong     
        x = sqrt(n);
        if(x*x == n){
            cout << "=> " << n << " la so chinh phuong." << endl;
        }
        else {
            cout << "=> " << n << " khong la so chinh phuong." << endl;
        }
        
// Kiem tra so nguyen to       
        if (n < 2 ) {
            cout << "=>" << n << " khong la so nguyen to." << endl;
        }
        for(int i = 2; i <= sqrt(n); i++){
            if(n % i == 0){
                count++;
            }
        }
        if(count == 0){
            cout << "=> " << n << " la so nguyen to." << endl;
        }
        else{
        	cout << "=> " << n << " khong phai so nguyen to." << endl;
        }
}


void Chucnang2 () {
	int a,b;

	cout << "Nhap vao so a: ";
	cin >> a;
	cout << "Nhap vao so b: ";
	cin >> b;
	
	//UCLN
	for (int i = a; i >= 1; i++){
		if(a % i == 0 && b % i == 0 ){
			cout << "UCLN cua hai so " << a << " va " << b << " la: " << i;
		}
	}
	
	
	//BCNN
	for (int i = a; i <= a*b; i++){
		if (a % i == 0 && b % i == 0){
			cout << "BCNN cua hai so " << a << " va " << b << " la: " << i;
		}
	}
		
}


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
	int Tongsogio = Gioketthuc - Giobatdau;
	cout << "Tong so gio cua quy khach la: " << Tongsogio << endl;
	if ( Tongsogio <= 3 ) {
		Tongtien = Tongsogio * 150000;
	} 
	else {
		Tongtien = 3*150000 + (Tongsogio - 3)*150000*0.7;
	}
	if (Giobatdau >= 14 && Giobatdau <= 17) {
		Tongtien = Tongtien*0.9;
	}
 	cout << "Tong so tien khach phai tra la: " << Tongtien << endl;
}


void Chucnang4() {
    int a; float tien;
    float bac1 = 1678; float bac2 = 1734; float bac3 = 2014; 
    float bac4 = 2536; float bac5 = 2834; float bac6 = 2927;
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


void Chucnang5(){
	int tien;
	int totien;
	int menhgiatien[] = {500, 200, 100, 50, 20, 10, 5, 2, 1};
	cout << "Chuong trinh doi tien" << endl;
    cout << "Chung toi ho tro doi cac menh gia 500, 200, 100, 50, 20, 10, 5, 2, 1" <<  " ( Don vi : nghin dong )" << endl; 
	cout << "Nhap vao menh gia can doi (don vi: nghin dong): ";
	cin >> tien;
	for (int i = 0; i < 9; i++){
		totien = tien / menhgiatien[i];
		tien = tien - totien * menhgiatien[i];
		if (totien != 0){
			cout << " -> " << totien << " to " << menhgiatien[i] << endl;
		}	
	}
}


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
        cout << "  + So tien phai tra:  " << tientra << " vnd " << endl;
        cout << "  + So tien con lai:   " << tiencon << " vnd " << endl;
        cout << endl; 
    }  
}


void Chucnang7() {
    float sotiencan = 500; //Don vi "tram tieu vnd"
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


void Chucnang8() {
	cout << "Chuc nang 8";
}


void Chucnang9() {
    int cso1, cso2;
    int random = 0;
    cout << "Game FPOLY" << endl;
    cout << "Xin moi nhap so cua ban!" << endl;
    cout << "So thu nhat: ";
    cin >> cso1;
    cout << "So thu hai: ";
    cin >> cso2;
    int ketqua[2];
    srand((int) time(0));
    for (int i = 0; i < 2; i++){
        int kq = rand() % 15;
        ketqua[i] = kq;
    }
    for (int i = 0; i < 2; i++){
        if ( cso1 == ketqua[i] || cso2 == ketqua[i] ){
            random++;
        }
    }
    cout << "Ket qua quay so" << endl;
    cout << "So may man dau tien: " << ketqua[0] << endl;
    cout << "So may man thu hai: " << ketqua[1] << endl;
    if (random == 2){
        cout << "Chuc mung ban da trung: * Giai dac biet *" << endl;
    }
    else if (random == 1){
        cout << "Chuc mung ban da trung: * Giai nhat *" << endl;
    }
    else {
        cout << "Chuc ban may man lan sau!!" << endl; 
    }
}


void Chucnang10() {
    int tongtuso, tongmauso, hieutuso, hieumauso, tichtuso, tichmauso, thuongtuso, thuongmauso;
    int Tso1, Tso2, Mso1, Mso2;
        cout << "Nhap phan so" << endl;
		cout << "Phan so thu nhat" << endl;
		cout << "Tu so la: ";
		cin >> Tso1;
		cout << "Mau so la: ";
		cin >> Mso1;
		cout << endl;
		cout << "Phan so thu hai" << endl;
		cout << "Tu so la: ";
		cin >> Tso2;
		cout << "Mau so la: ";
		cin >> Mso2;
		cout << endl;
		
		if (Mso1 == 0 && Mso2 == 0) {
			cout << "Mau so cua phan so khong hop le!!";
		}
		
		cout << "Hai phan so la: " << endl;
		cout << "Phan so 1: " << Tso1 << "/" << Mso1 << endl;
		cout << "Phan so 2: " << Tso2 << "/" << Mso2 << endl;
		
		cout << endl;
		
		tongtuso  = Tso1 * Mso2 + Mso1 * Tso2;
		tongmauso = Mso1 * Mso2;
		
		hieutuso  = Tso1 * Mso2 - Mso1 * Tso2;
		hieumauso = Mso1 * Mso2;
		
		tichtuso  = Tso1 * Tso2;
		tichmauso = Mso1 * Mso2;
		
		thuongtuso  = Tso1 * Mso2;
		thuongmauso = Mso1 * Tso2;
		
        cout << "Ket qua Tong, Hieu, Tich, Thuong cua 2 phan so: " << endl;

		cout << "Tong :   " << tongtuso   << "/" << tongmauso   << endl;
		cout << "Hieu :   " << hieutuso   << "/" << hieumauso   << endl;
		cout << "Tich :   " << tichtuso   << "/" << tichmauso   << endl;
		cout << "Thuong : " << thuongtuso << "/" << thuongmauso << endl;
}


void menu () {
    cout << "                   		 Hello!!!\n" << endl;
	cout << "         	        Duoi day la MENU cua chung toi.\n" << endl;
	cout << "	   ========================================================\n"<< endl;
	cout << "	   <||>   1. Kiem tra mot so.                          <||>\n"<< endl;
	cout << "	   <||>   2. Tim Uoc chung va boi so chung cua 2 so.   <||>\n"<< endl;
	cout << "	   <||>   3. Tinh tien cho quan Karaoke.               <||>\n"<< endl;
	cout << "	   <||>   4. Tinh tien dien.                           <||>\n"<< endl;
	cout << "	   <||>   5. Doi tien.                                 <||>\n"<< endl;
	cout << "	   <||>   6. Lai xuat vay ngan hang vay tra gop.       <||>\n"<< endl;
	cout << "	   <||>   7. Vay tien mua xe.                          <||>\n"<< endl;
	cout << "	   <||>   8. Sap xep thong tin sinh vien.              <||>\n"<< endl;
	cout << "	   <||>   9. Game FPOLY-LOTT.                          <||>\n"<< endl;
	cout << "	   <||>   10. Tinh toan phan so.                       <||>\n"<< endl;
	cout << "	   <||>   11. Dung chuong trinh.                       <||>\n"<< endl;
	cout << "	   ========================================================\n"<< endl;
	cout << " ==>> Xin moi ban chon: ";
}


void Dungchuongtrinh () {
    cout << "Cam on ban da su dung dich vu. Goodbye!";
	exit(0);
}


int main () {
    int chon;
    do{
        menu();
        cin >> chon;
        switch (chon)
        {
        case 1:
        	cout << "Chao mung ban den voi Chuc nang 1." << endl;
            Chucnang1();
            system("pause");
        break;

        case 2:
        	cout << "Chao mung ban den voi Chuc nang 2." << endl;
            Chucnang2();
            system("pause");
        break;

        case 3:
        	cout << "Chao mung ban den voi Chuc nang 3." << endl;
            Chucnang3();
            system("pause");
        break;

        case 4:
        	cout << "Chao mung ban den voi Chuc nang 4." << endl;
            Chucnang4();
            system("pause");
        break;

        case 5:
        	cout << "Chao mung ban den voi Chuc nang 5." << endl;
            Chucnang5();
            system("pause");
        break;

        case 6:
        	cout << "Chao mung ban den voi Chuc nang 6." << endl;
            Chucnang6();
            system("pause");
        break;

        case 7:
        	cout << "Chao mung ban den voi Chuc nang 7." << endl;
            Chucnang7();
            system("pause");    
        break;

        case 8:
        	cout << "Chao mung ban den voi Chuc nang 8." << endl;
            Chucnang8();
            system("pause");
        break;

        case 9:
        	cout << "Chao mung ban den voi Chuc nang 9." << endl;
            Chucnang9();
            system("pause");
        break;

        case 10:
        	cout << "Chao mung ban den voi Chuc nang 10." << endl;
            Chucnang10();
            system("pause");
        break;

		case 11:
            Dungchuongtrinh();
            system("pause");
        break;

        default:
            cout << "Lua chon cua ban khong hop le !! Xin vui long nhap lai ... Cam on !" << endl;
            system("pause");
        break;
        }
    } 
    while (chon != 0 || chon > 11);
    
    return 0;
}

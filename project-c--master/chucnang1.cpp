#include<iostream>
#include<math.h>

using namespace std;

void Chucnang1 () {
    int n; 
    int x; 
    int count;
        cout << "Nhap vao so a: ";
        cin >> n;

//Kiem tra so nguyen
        if (n > 0) {
            cout << "=> "<< n << " la so nguyen duong" << endl;
        }
        else {
            cout << "=> "<< n << " la so nguyen am" << endl;
        }
//Kiem tra so chinh phuong
        x = sqrt(n);
        if(x*x == n){
            cout << "=> " << n << " la so chinh phuong!" << endl;
        }
        else {
            cout << "=> " << n << " khong la so chinh phuong!" << endl;
        }        
//Kiem tra so nguyen to
        if (n < 2 ) {
            cout << "=>" << n << " khong la so nguyen to!" << endl;
        }
        for(int i = 2; i <= sqrt(n); i++){
            if(n % i == 0){
                count++;
            }
        }
        if(count == 0){
            cout << "=> " << n << " la so nguyen to" << endl;
        }
        else{
        	cout << "=> " << n << " khong phai so nguyen to" << endl;
            }
}

int main () {
    Chucnang1();
    return 0;
}

#include<iostream>
#include<algorithm>

using namespace std;

void Chucnang2 () {
	int a,b;	
        cout << "Nhap vao so a: ";
		cin >> a;
		cout << "Nhap vao so b: ";
		cin >> b;
		
		for (int i = a; i >= 1; i--){
			if (a % i == 0 && b % i == 0){
				cout << "UCLN cua hai so la: " << i << endl;
				break;
			}
		}
		
		// ham " __gcd "  su dung thu vien <algorithm>
		cout << "UCLN cua hai so " << a << " va " << b << " la: " << __gcd(a, b) << endl;

	cout << endl;

		for (int i = a; i <= a*b; i++){
			if (i % a == 0 && i % b == 0){
				cout << "BCNN cua hai so " << a << " va " << b << " la: " << i << endl;
				break; 
			}
		}
}

int main () {
    Chucnang2();
    return 0;
}

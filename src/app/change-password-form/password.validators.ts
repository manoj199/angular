import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(contains : AbstractControl){
        return new Promise((resolve) => {
            if(contains.value != '1234')
                resolve({ invalidOldPassword : true });
            else
                resolve(null);
        })
    }

    static passwordsShouldMatch(contains : AbstractControl){
        let newPassword = contains.get('newPassword');
        let confirmPassword = contains.get('confirmPassword');

        if(newPassword.value != confirmPassword.value)
            return { passwordShouldMatch:true }

        return null;
    }
}
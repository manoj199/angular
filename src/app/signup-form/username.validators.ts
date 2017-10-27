import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
   static cannotContainSpace(controls: AbstractControl) : ValidationErrors | null {
        if((controls.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace : true};
        
        return null;
    }

    static shouldBeUnique(controls : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(controls.value === "manoj")
                    resolve({ shouldBeUnique : true });
                else
                    resolve(null);
            },2000);
        });
    }
}
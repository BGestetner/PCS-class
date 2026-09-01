'use strict'


    function trackDosage(medicationName, initialDosage,pin) {
        let currentDosage = initialDosage;
        let medication = medicationName;
        return {
            getInstructions() {
                return `Take ${currentDosage}mg of ${medication} `
            },
            adjustDosage(doctorPin, newDosage) {
                if (doctorPin !== pin) {
                    console.log('Please enter a valid pin');
                }
                else if (newDosage <= 0) {
                    console.log('that was not a valid dosage');
                }
                else {
                    currentDosage = newDosage;
            
                }
                    
            }
        }
    
    }
    
const dosage1 = trackDosage('tylenol', 1, 1234);
console.log(dosage1.getInstructions());
dosage1.adjustDosage(1234, 1.5);
console.log(dosage1.getInstructions());
dosage1.adjustDosage(456, 9);
console.log(dosage1.getInstructions());
dosage1.adjustDosage(1234, -9);
console.log(dosage1.getInstructions());


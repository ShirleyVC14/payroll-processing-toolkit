const employees = [
    { 
        name: "Sarah Loo", 
        hourlyRate: 20,
        hoursWorked: 40 
    },
    { 
        name: "Betty Motts", 
        hourlyRate: 22,
        hoursWorked: 42 
    },
    { 
        name: "Nathan Folks",
        hourlyRate: 22, 
        hoursWorked: 36
    },
    { 
        name: "Chad Ox", 
        hourlyRate: 24, 
        hoursWorked: 41 
    },

];

function calulateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}
//Testing
console.log(calulateBasePay(20,40));  //800
console.log(calulateBasePay(22,42));  //880 (addtional 2 hours are not counted)

function calulateOvertimePlay (rate, hours) {
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    }
    return 0;
}
//Testing
console.log(calulateOvertimePlay(22,36)); //0 b/c no overtime done
console.log(calulateOvertimePlay(24,41)); //
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

function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

// Testing
console.log(calculateBasePay(20,40));  //800
console.log(calculateBasePay(22,42));  //880 (additional 2 hours are not counted)

function calculateOvertimePay(rate, hours) {   // fixed spelling
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    }
    return 0;
}

// Testing
console.log(calculateOvertimePay(22,36)); //0 b/c no overtime done
console.log(calculateOvertimePay(24,41)); //36 

function calculateTaxes(grossPay) {   // fixed camelCase
    const taxRate = 0.15;
    return grossPay - (grossPay * taxRate);
}

// Testing
console.log(calculateTaxes(1000));      //850

function processPayroll(employee) {   // single employee
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);   // fixed variable name

    return  {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

employees.forEach(employee => {   // looping through employees
    const payrollReport = processPayroll(employee);
    console.log(payrollReport);
});
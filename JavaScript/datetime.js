let a = new Date()

document.writeln("Date = "+ a.getDate())
document.writeln("Day = "+ a.getDay())
document.writeln("Month = "+ (a.getMonth()+1))
document.writeln("Year = "+ (a.getFullYear()))
document.writeln("UTC Year = "+ a.getUTCFullYear())
document.writeln("UTC Month = "+ (a.getUTCMonth()+1))
document.writeln("UTC Date = "+ a.getUTCDate())
document.writeln("UTC Day = "+ a.getUTCDay())

document.writeln("Hour = "+ a.getHours())
document.writeln("UTC Hour = "+ a.getUTCHours())

document.writeln("Minute = "+ a.getMinutes())
document.writeln("UTC Minute = "+ a.getUTCMinutes())

document.writeln("Seconds = "+ a.getSeconds())
document.writeln("UTC Seconds = "+ a.getUTCSeconds())

document.writeln("MiliSeconds = "+ a.getMilliseconds())
document.writeln("UTC Mili Seconds = "+ a.getUTCMilliseconds())

// a.setDate(12)
// a.setMonth(10)
// a.setFullYear(2024)

// a.setHours(10)
// a.setMinutes(10)
// a.setSeconds(34)
// a.setMilliseconds(2008)

// document.writeln("Mod Date = "+ a);

// Today's Date
document.writeln(a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear())

document.writeln(a.toDateString())
document.writeln(a.toLocaleDateString())
document.writeln(a.toString())
document.writeln(a.valueOf())
document.writeln(a.toJSON())

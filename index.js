/*
    inquirer install  to get input from the user
    qr-image to generate qr
    fs install to write to the file

*/
import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"
inquirer
    //prompt shows what is to be asked and stored in form of objects
    //message is the message shown to us
    // name is name of variable in which the input is stored
    .prompt([
        { message: "Type your url: ", name: "url" }
    ])
    .then((answers) => {
        const url = answers.url
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
        fs.writeFile("url.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

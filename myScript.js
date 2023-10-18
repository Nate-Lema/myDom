function html() {

        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'myPara');
        paragraph.innerHTML = "Number1"
        document.body.append(paragraph);
        let input1 = document.createElement('input');
        input1.value = "this will be the last change";
        input1.setAttribute('id', 'myId')
        document.getElementById('myPara').appendChild(input1);

        let paragraph2 = document.createElement('p');
        paragraph2.setAttribute('id', 'myPara2');
        paragraph2.innerHTML = "Number2"
        document.body.append(paragraph2);
        let input2 = document.createElement('input');
        input2.setAttribute('id', 'myId2')
        document.getElementById('myPara2').appendChild(input2);

        let paragraph3 = document.createElement('p');
        paragraph3.setAttribute('id', 'myPara3');
        paragraph3.innerHTML = "Sum"
        document.body.append(paragraph3);
        let input3 = document.createElement('textArea');
        input3.setAttribute('id', 'myId')
        input3.setAttribute('cols', 3);
        input3.setAttribute('rows', 1);
        document.getElementById('myPara3').appendChild(input3);

        let butt = document.createElement('button');
        butt.setAttribute('id', 'myButton');
        butt.onclick = function sum() {
                let add = document.getElementById('myButton');
                let num1 = document.getElementById('myId');
                let num2 = document.getElementById('myId2');

                add.value = parseInt(num1.value) + parseInt(num2.value)
        };
        butt.innerHTML = "Getting sum";
        document.body.appendChild(butt);
        // let breaks = document.createElement('br');
        // document.butt.appendChild(breaks);
        let div = document.createElement('div')
        div.innerHTML = "This is div before it changes.";
        div.id = 'myDiv';
        document.body.appendChild(div);
        document.getElementById('myDiv').innerHTML = "This is div after it changes.";

        let image = document.createElement('img');
        image.id = 'myImage';
        image.src = './chrysanthumum copy 3.jpeg'
        document.body.prepend(image);

        let myLink = document.createElement('a');
        myLink.href = 'https://www.google.com/'
        myLink.innerHTML = 'Google'
        document.body.appendChild(myLink);

        let tbl = document.createElement('table');
        let tblBody = document.createElement("tbody");
        for (let i = 0; i < 2; i++) {
                let row = document.createElement('tr');
                for (let j = 0; j < 2; j++) {
                        let cell = document.createElement('tr');
                        let cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                }
                tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute('border', 2)

        let lists = document.createElement('ol');
        document.body.appendChild(lists);
        let list1 = document.createElement('li');
        lists.appendChild(list1);
        list1.innerHTML = "List one";

        let list2 = document.createElement('li');
        lists.appendChild(list2);
        list2.innerHTML = "List two";

        let list3 = document.createElement('li');
        lists.appendChild(list3);
        list3.innerHTML = "List three";

        let pr = document.createElement('p');
        pr.innerHTML = 'this got to come before the order list'
        lists.before(pr)
        
        


}




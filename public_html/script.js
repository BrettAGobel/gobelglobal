/*</div>
            <div class="counter-body">
                <div class="row">
                    <div class="col-6 counter-content count-to-180">
                        Locations
                    </div>
                    <div class="col-6 counter-content count-to-15000">
                        Employees
                    </div>
                </div>
            </div>
            </div>

 */
/*const speed = 100

document.querySelectorAll(".counter-content").forEach(counter => {
    const counterNumber = counter.getAttribute("countTo");

    const updateCount = setInterval(() => {
        const divContent = counter.innerText;
        const increaseBy = counterNumber / speed;

        divContent < counterNumber ?
        counter.innerHTML = Math.ceil(divContent + increaseBy) :
        clearInterval(updateCount);
    }, 1);
});*/






/*function counter (i) {
    let employees = document.getElementById("counter-content-1");

*/

        /*setInterval( () => {
            employees.innerText = employees + i
        }, 5000)
    }
*/


let counter = document.querySelector(".employees");


let count = 1

setInterval(() => {
    count++;
    counter.innerText = count
}, 0)


        let hajs = 100;

        const funkcja = () => {
            let obs = Number(document.getElementById("obs").value);
            if (obs > hajs) {
                window.alert("Masz za mało kredytów.");
                return;
            }
            
            hajs -= obs;
            
            let min = 1;
            let max = 10;
            
            let los1 = Math.floor(Math.random() * (max - min + 1)) + min;
            let los2 = Math.floor(Math.random() * (max - min + 1)) + min;
            let los3 = Math.floor(Math.random() * (max - min + 1)) + min;
            
            document.getElementById("los1").textContent = `${los1}`;
            document.getElementById("los2").textContent = `${los2}`;
            document.getElementById("los3").textContent = `${los3}`;
            
            if (7 == los1 && los1 == los2 && los2 == los3) {
                    hajs += 7 * obs;
                window.alert("Wygrałeś " + 7 * obs + " kredytów!!!");
            } else if (los1 == los2 && los2 == los3) {
                hajs += 3 * obs;
                window.alert("Wygrałeś " + 3 * obs + " kredytów!!!");
                }
            document.getElementById("hajs").textContent = `${hajs}`;
            
        };

        window.addEventListener('DOMContentLoaded', () => {
        const box3 = document.querySelector('.box3');
        setTimeout(() => {
            box3.style.opacity = '0';
        }, 1000);

        setTimeout(() => {
            box3.style.display = 'none';
        }, 3000);
    });


const admin = {
            userHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
            passwordHash: "94ba809b4039ccb7fae123c146abaff0118c167247139c2c61df99ca9f03e286" 
        };

        function login(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const text = document.getElementById('text').value;

          
            const hashedUsername = CryptoJS.SHA256(username).toString();
            const hashedPasswordi = CryptoJS.SHA256(password).toString();
            const hashedPassword = CryptoJS.SHA256(hashedPasswordi).toString();
          
            if(hashedUsername === admin.userHash && hashedPassword === admin.passwordHash) {
                console.log(text);
            } else {
                document.getElementById('message').textContent = "Hatalı kullanıcı adı veya şifre!";
            }
        }

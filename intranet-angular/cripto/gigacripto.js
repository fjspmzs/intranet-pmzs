let box_msg_simples = window.document.getElementById('msg_simples_box')
let box_msg_dupla = window.document.getElementById('msg_dupla_box')
let box_chave_simples = window.document.getElementById('chave_simples_box')
let box_chave_horizontal = window.document.getElementById('chave_horizontal_box')
let box_chave_vertical = window.document.getElementById('chave_vertical_box')
let res = window.document.getElementById('res')
let final = window.document.getElementById('final')

function crypt_simples() {
    let msg_crypto = ""
    let msg_simples = String(box_msg_simples.value.toUpperCase().replace(/ /g,""))
    let letras_mortas = String("@".repeat((5 - ((msg_simples.length + 2) % 5)) % 5))
    
    msg_simples += letras_mortas

    let chave_simples = String(box_chave_simples.value.toUpperCase().replace(/ /g,"").replace(/-/g,""))
    let chave_simples_cresc = chave_simples.split('').sort()

    let num_linhas = Math.ceil(msg_simples.length / chave_simples.length)

    let chave_simples_ordenada = chave_simples
    for (let i = 1; i <= chave_simples.length; i++) {
        chave_simples_ordenada = chave_simples_ordenada.replace(new RegExp(chave_simples_ordenada[chave_simples_ordenada.indexOf(String(chave_simples_cresc[i - 1]))]), `${i} `)
    }
    chave_simples_ordenada = chave_simples_ordenada.slice(0, -1).split(" ")

    let ordem_colunas = chave_simples_ordenada

    let batalha_naval = {}
    let cont = 0

    for (let i = 1; i <= num_linhas; i++) {
        for (let a = 1; a <= chave_simples.length; a++) {
            try {
                batalha_naval[`${i}-${ordem_colunas[a - 1]}`] = String(msg_simples[cont])
                cont += 1
            } catch(e) {
                break
            }
            if (cont === msg_simples.length) {
                break
            }
        }
        if (cont === msg_simples.length) {
            break
        }
    }

    for (let a = 1; a <= chave_simples.length; a++) {
        for (let i = 1; i <= num_linhas; i++) {
            let key = `${i}-${a}`
            if (batalha_naval.hasOwnProperty(key)) {
                try {
                    msg_crypto += String(batalha_naval[key])
                } catch(e) {
                    continue
                }
            }
        }
    }

    res.id = "giga"
    final.innerHTML = `<h1>Resultado:</h1><br>${msg_crypto}`
}

function decrypt_simples() {
    let msg_decrypto = ""
    let msg_simples = String(box_msg_simples.value.toUpperCase().replace(/ /g,"").replace(/@/g,""))
    
    let chave_simples = String(box_chave_simples.value.toUpperCase().replace(/ /g,"").replace(/-/g,""))
    let chave_simples_cresc = chave_simples.split('').sort()

    let num_linhas = Math.ceil(msg_simples.length / chave_simples.length)
    let num_letras_mortas = (num_linhas * chave_simples.length) - msg_simples.length

    let chave_simples_ordenada = chave_simples
    for (let i = 1; i <= chave_simples.length; i++) {
        chave_simples_ordenada = chave_simples_ordenada.replace(new RegExp(chave_simples_ordenada[chave_simples_ordenada.indexOf(String(chave_simples_cresc[i - 1]))]), `${i} `)
    }
    chave_simples_ordenada = chave_simples_ordenada.slice(0, -1).split(" ")

    let ordem_colunas = chave_simples_ordenada

    let batalha_naval = {}
    let cont = 0

    for (let i = num_linhas; i > 0; i--) {
        try {
            for (let a = chave_simples.length; a > 0; a--) {
                if (cont === num_letras_mortas) {
                    break
                }
                batalha_naval[`${i}-${ordem_colunas[a - 1]}`] = "@"
                cont += 1
            }
            if (cont === num_letras_mortas) {
                break
            }
        } catch(e) {
            continue
        }
    }

    let cont2 = 0

    for (let i = 1; i <= chave_simples.length; i++) {
        for (let a = 1; a <= num_linhas; a++) {
            if (batalha_naval[`${a}-${i}`] === "@" || batalha_naval[`${a}-${i}`] === "undefined") {
                continue    
            } else {
                batalha_naval[`${a}-${i}`] = String(msg_simples[cont2])
                cont2 += 1
            }
            if (cont2 === msg_simples.length) {
                break
            }
        }
        if (cont2 === msg_simples.length) {
            break
        }
    }

    for (let linha = 1; linha <= num_linhas; linha++) {
        for (let coluna = 0; coluna <= ordem_colunas.length; coluna++) {
            if (String(batalha_naval[`${linha}-${ordem_colunas[coluna]}`]) != "undefined" && String(batalha_naval[`${linha}-${ordem_colunas[coluna]}`]) != "@") {
                msg_decrypto += batalha_naval[`${linha}-${ordem_colunas[coluna]}`]
            }
        }
    }

    res.id = "giga"
    final.innerHTML = `<h1>Resultado:</h1><br>${msg_decrypto}`
}

function crypt_dupla() {
    let msg_crypto = ""
    let msg_dupla = String(box_msg_dupla.value.toUpperCase().replace(/ /g,""))
    let letras_mortas = String("@".repeat((5 - ((msg_dupla.length + 2) % 5)) % 5))
    msg_dupla += letras_mortas

    let chave_horizontal = String(box_chave_horizontal.value.toUpperCase().replace(/ /g,"").replace(/-/g,""))
    let chave_horizontal_cresc = chave_horizontal.split('').sort()

    let chave_horizontal_ordenada = chave_horizontal
    for (let i = 1; i <= chave_horizontal.length; i++) {
        chave_horizontal_ordenada = chave_horizontal_ordenada.replace(new RegExp(chave_horizontal_ordenada[chave_horizontal_ordenada.indexOf(String(chave_horizontal_cresc[i - 1]))]), `${i} `)
    }
    chave_horizontal_ordenada = chave_horizontal_ordenada.slice(0, -1).split(" ")

    let ordem_colunas = chave_horizontal_ordenada
    let num_colunas = ordem_colunas.length

    let chave_vertical = String(box_chave_vertical.value.toUpperCase().replace(/ /g,"").replace(/-/g,""))
    chave_vertical += String("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    let chave_vertical_cresc = chave_vertical.split('').sort()

    let chave_vertical_ordenada = chave_vertical
    for (let i = 1; i <= chave_vertical.length; i++) {
        chave_vertical_ordenada = chave_vertical_ordenada.replace(new RegExp(chave_vertical_ordenada[chave_vertical_ordenada.indexOf(String(chave_vertical_cresc[i - 1]))]), `${i} `)
    }
    chave_vertical_ordenada = chave_vertical_ordenada.slice(0, -1).split(" ")

    let ordem_linhas = chave_vertical_ordenada
    let num_linhas = ordem_linhas.length

    let batalha_naval = {}
    let cont = 0

    for (let i = 0; i <= num_linhas; i++) {
        for (let a = 0; a < num_colunas; a++) {
            try {
                batalha_naval[`${ordem_linhas[i]}-${ordem_colunas[a]}`] = String(msg_dupla[cont])
                cont += 1
            } catch (e) {
                if (cont === msg_dupla.length) {
                    break
                }
            }
            if (cont === msg_dupla.length) {
                break
            }
        }
        if (cont === msg_dupla.length) {
            break
        }
    }

    for (let a = 1; a <= num_colunas; a++) {
        for (let i = 1; i <= num_linhas; i++) {
            let key = `${i}-${a}`
            if (batalha_naval.hasOwnProperty(key)) {
                try {
                    msg_crypto += String(batalha_naval[key])
                } catch(e) {
                    continue
                }
            }
        }
    }

    res.id = "giga"
    final.innerHTML = `<h1>Resultado:</h1><br>${msg_crypto}`
}

function decrypt_dupla() {
    let msg_decrypto = ""
    let msg_dupla = String(box_msg_dupla.value.toUpperCase().replace(/ /g,"").replace(/@/g,""))

    let chave_horizontal = String(box_chave_horizontal.value.toUpperCase().replace(/ /g,"").replace(/-/g,""))
    let chave_horizontal_cresc = chave_horizontal.split('').sort()

    let chave_horizontal_ordenada = chave_horizontal
    for (let i = 1; i <= chave_horizontal.length; i++) {
        chave_horizontal_ordenada = chave_horizontal_ordenada.replace(new RegExp(chave_horizontal_ordenada[chave_horizontal_ordenada.indexOf(String(chave_horizontal_cresc[i - 1]))]), `${i} `)
    }
    chave_horizontal_ordenada = chave_horizontal_ordenada.slice(0, -1).split(" ")

    let ordem_colunas = chave_horizontal_ordenada
    let num_colunas = ordem_colunas.length

    let chave_vertical = String(box_chave_vertical.value.toUpperCase().replace(/ /g,"").replace(/-/g,""))
    chave_vertical += String("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    let chave_vertical_cresc = chave_vertical.split('').sort()

    let chave_vertical_ordenada = chave_vertical
    for (let i = 1; i <= chave_vertical.length; i++) {
        chave_vertical_ordenada = chave_vertical_ordenada.replace(new RegExp(chave_vertical_ordenada[chave_vertical_ordenada.indexOf(String(chave_vertical_cresc[i - 1]))]), `${i} `)
    }
    chave_vertical_ordenada = chave_vertical_ordenada.slice(0, -1).split(" ")

    let ordem_linhas = chave_vertical_ordenada
    let num_linhas = ordem_linhas.length

    let num_letras_mortas = (num_linhas * num_colunas) - msg_dupla.length

    let batalha_naval = {}
    let cont = 0

    for (let i = num_linhas; i > 0; i--) {
        for (let a = num_colunas; a > 0; a--) {
            try {
                batalha_naval[`${ordem_linhas[i - 1]}-${ordem_colunas[a - 1]}`] = "@"
                cont += 1
            } catch(e) {
                break
            }
            if (cont === num_letras_mortas) {
                break
            }
        }
        if (cont === num_letras_mortas) {
            break
        }
    }

    let cont2 = 0

    for (let a = 1; a <= num_colunas; a++) {
        for (let i = 1; i <= num_linhas; i++) {
            if (batalha_naval[`${i}-${a}`] === "@") {
                continue
            } else {
                batalha_naval[`${i}-${a}`] = String(msg_dupla[cont2])
                cont2 += 1
                if (cont2 === msg_dupla.length) {
                    break
                }
            }
            if (cont2 === msg_dupla.length) {
                break
            }
        }
        if (cont2 === msg_dupla.length) {
            break
        }
    }

    let break_loop = false

    for (let i = 1; i <= num_linhas; i++) {
        for (let a = 1; a <= num_colunas; a++) {
            if (batalha_naval[`${ordem_linhas[i - 1]}-${ordem_colunas[a - 1]}`] === "@") {
                break_loop = true
                break
            }
            msg_decrypto += String(batalha_naval[`${ordem_linhas[i - 1]}-${ordem_colunas[a - 1]}`])
            if (break_loop) {
                break
            }
        }
    }

    res.id = "giga"
    final.innerHTML = `<h1>Resultado:</h1><br>${msg_decrypto}`
}

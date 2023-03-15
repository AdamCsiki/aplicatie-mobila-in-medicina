function getHttpOnlyToken(headers: string[]) {
    // ! slices the text and adds 8 to remove the "refresh="
    // ? searches the index of the 'refresh=' and with the "+ 8" removes it all together from the token
    return headers[0].slice(headers[0].search('refresh=') + 8)
}

export default getHttpOnlyToken

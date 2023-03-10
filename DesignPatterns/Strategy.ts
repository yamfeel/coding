// Upload function
type fileRespones = [URL: string, Body: object]

interface UploadFile {
    execute(file, options): fileRespones;
}

class AliUploadFile implements UploadFile {
    execute(file, options): fileRespones {
        let test = [file, options]
        return ['', test]
    }
}

class TxUploadFile implements UploadFile {
    execute(file, options): fileRespones {
        let test = [file, options]
        return ['', test]
    }
}

class CloudSO {
    private uploadFile: UploadFile

    constructor(uploadFile: UploadFile) {
        this.uploadFile = uploadFile
    }

    setUploadFile(uploadFile: UploadFile) {
        this.uploadFile = uploadFile
    }

    executeUploadFile(file, options): fileRespones {
        return this.uploadFile.execute(file, options)
    }
}

// Usage
const cloudSO = new CloudSO(new AliUploadFile())
console.log(cloudSO.executeUploadFile('img', 'options'))

cloudSO.setUploadFile(new TxUploadFile())
console.log(cloudSO.executeUploadFile('img', 'options'))

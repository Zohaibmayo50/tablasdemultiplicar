for ($i = 1; $i -le 100; $i++) {
    foreach ($folder in @("app/sayi", "app/tabla")) {
        $file = "$folder/$i/page.tsx"
        if (Test-Path $file) {
            $content = Get-Content $file -Raw
            # Replace Turkish table names with Spanish
            $content = $content -replace '\d+ Çarpım Tablosu[^"]*', "Tabla del $i"
            $content = $content -replace '\d+-\d+ Çarpım Tablosu', "Tablas del 1-100"
            Set-Content $file $content -Encoding UTF8
            Write-Host "Fixed page $i in $folder"
        }
    }
}
Write-Host "Translation fix complete!"

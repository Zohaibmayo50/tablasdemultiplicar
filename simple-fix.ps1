# Simple fix for all 100 pages
for ($i = 1; $i -le 100; $i++) {
    $range = if ($i -le 10) { "Tablas 1-10" } elseif ($i -le 20) { "Tablas 11-20" } elseif ($i -le 30) { "Tablas 21-30" } elseif ($i -le 40) { "Tablas 31-40" } elseif ($i -le 50) { "Tablas 41-50" } elseif ($i -le 60) { "Tablas 51-60" } elseif ($i -le 70) { "Tablas 61-70" } elseif ($i -le 80) { "Tablas 71-80" } elseif ($i -le 90) { "Tablas 81-90" } else { "Tablas 91-100" }
    
    foreach ($folder in @("app/tabla", "app/sayi")) {
        $file = "$folder/$i/page.tsx"
        if (Test-Path $file) {
            $content = Get-Content $file -Raw
            # Replace Turkish with Spanish
            $content = $content -replace '[Çç]arp[ıi]m|tablosu|öğren|rehber', "Tabla del $i"
            $content = $content -replace 'Başlangıç', "Inicio"
            $content = $content -replace 'Ş', "S"
            Set-Content $file $content -Encoding UTF8
        }
    }
}
Write-Host "Done"

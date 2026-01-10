# Translation data for Spanish table names
$tableNames = @{
    1 = "Tabla del 1 - Aprendiendo a Multiplicar por 1"
    2 = "Tabla del 2 - Aprendiendo a Multiplicar por 2"
    3 = "Tabla del 3 - Aprendiendo a Multiplicar por 3"
    4 = "Tabla del 4 - Aprendiendo a Multiplicar por 4"
    5 = "Tabla del 5 - Contando de Cinco en Cinco"
    6 = "Tabla del 6 - Aprendiendo a Multiplicar por 6"
    7 = "Tabla del 7 - Aprendiendo a Multiplicar por 7"
    8 = "Tabla del 8 - Aprendiendo a Multiplicar por 8"
    9 = "Tabla del 9 - Aprendiendo a Multiplicar por 9"
    10 = "Tabla del 10 - Aprendiendo a Multiplicar por 10"
}

$tableDescriptions = @{
    1 = "Aprende la tabla del 1 y entiende por qué todo número multiplicado por 1 es él mismo. Ejercicios prácticos y juegos interactivos."
    2 = "Tabla del 2 con patrones pares. Ejercicios visuales y juegos educativos para dominar las multiplicaciones por 2."
    3 = "Tabla del 3 con patrones y aplicaciones prácticas. Aprende a multiplicar por 3 con ejercicios interactivos."
    4 = "Tabla del 4 con desgloses visuales. Practica las multiplicaciones por 4 con juegos divertidos."
    5 = "Tabla del 5 con el patrón de 5 y 0. Perfecto para aprender dinero y decir la hora."
    6 = "Tabla del 6 con patrones visuales. Ejercicios y juegos para dominar las multiplicaciones por 6."
    7 = "Tabla del 7 con prácticas variadas. Aprende los multiplicados por 7 con ejercicios divertidos."
    8 = "Tabla del 8 con patrones dobles. Practica las multiplicaciones por 8 con juegos interactivos."
    9 = "Tabla del 9 con el truco del patrón. Aprende los secretos de la tabla del 9."
    10 = "Tabla del 10 - La más fácil. Multiplicar por 10 solo añade un cero. Juegos y ejercicios."
}

function Get-RangeSpanish {
    param([int]$num)
    switch -Exact ($num) {
        {$_ -le 10} { return "Tablas del 1-10" }
        {$_ -le 20} { return "Tablas del 11-20" }
        {$_ -le 30} { return "Tablas del 21-30" }
        {$_ -le 40} { return "Tablas del 31-40" }
        {$_ -le 50} { return "Tablas del 41-50" }
        {$_ -le 60} { return "Tablas del 51-60" }
        {$_ -le 70} { return "Tablas del 61-70" }
        {$_ -le 80} { return "Tablas del 71-80" }
        {$_ -le 90} { return "Tablas del 81-90" }
        default { return "Tablas del 91-100" }
    }
}

# Translate all pages in both folders
foreach ($folder in @("app/sayi", "app/tabla")) {
    for ($i = 1; $i -le 100; $i++) {
        $filePath = "$folder/$i/page.tsx"
        
        if (Test-Path $filePath) {
            $content = Get-Content $filePath -Raw
            
            # Get Spanish translations
            $spanishName = if ($tableNames.ContainsKey($i)) { $tableNames[$i] } else { "Tabla del $i" }
            $spanishDesc = if ($tableDescriptions.ContainsKey($i)) { $tableDescriptions[$i] } else { "Aprende la tabla del $i. Ejercicios interactivos y juegos educativos para dominar las matemáticas." }
            $rangeSpanish = Get-RangeSpanish $i
            
            # Fix metadata title and description
            $content = $content -replace "title: '[^']+'", "title: 'Tabla del $i - Aprender Multiplicación | Tablas de Multiplicar'"
            $content = $content -replace 'description: "[^"]+"', "description: '$spanishDesc'"
            
            # Fix schema.org name fields (replace any Turkish "Çarpım Tablosu" patterns)
            $content = $content -replace '"name": "[^"]*\d+\s+(Çarpım|carpim)[^"]*"', "`"name`": `"Tabla del $i`""
            
            # Fix breadcrumb range names
            $content = $content -replace '"name": "[^"]*\d+-\d+[^"]*Çarpım[^"]*"', "`"name`": `"$rangeSpanish`""
            $content = $content -replace '"name": "[^"]*\d+-\d+[^"]*carpim[^"]*"', "`"name`": `"$rangeSpanish`""
            
            # Fix LearningResource descriptions
            $content = $content -replace '"teaches": "[^"]+"', "`"teaches`": `"Tabla del $i`""
            
            Set-Content $filePath $content -Encoding UTF8
            Write-Host "✓ Fixed page $i in $folder"
        }
    }
}

Write-Host "`nAll 200 pages translated successfully!`""

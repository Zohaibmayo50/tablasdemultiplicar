$translations = @{
    1 = @{
        name = "Tabla del 1 - Identidad Multiplicativa"
        desc = "Aprende que cualquier número multiplicado por 1 es él mismo. Domina la propiedad de identidad con ejercicios interactivos y juegos educativos."
        keywords = "tabla del 1, multiplicar por 1, propiedad de identidad, matemáticas básicas"
        range_name = "Tablas 1-10"
    }
    2 = @{
        name = "Tabla del 2 - Números Pares"
        desc = "Tabla del 2 con patrones de números pares. Ejercicios visuales y juegos educativos para dominar las multiplicaciones por 2."
        keywords = "tabla del 2, multiplicar por 2, números pares, ejercicios interactivos"
        range_name = "Tablas 1-10"
    }
    3 = @{
        name = "Tabla del 3 - Patrón de Tres"
        desc = "Tabla del 3 con patrones y aplicaciones prácticas. Aprende a multiplicar por 3 con ejercicios interactivos y juegos."
        keywords = "tabla del 3, multiplicar por 3, patrones numéricos, matemáticas interactivas"
        range_name = "Tablas 1-10"
    }
    4 = @{
        name = "Tabla del 4 - Dobles de Dobles"
        desc = "Tabla del 4: domina la técnica de dobles. Practica multiplicaciones con ejercicios visuales y juegos educativos."
        keywords = "tabla del 4, multiplicar por 4, dobles, ejercicios matemáticos"
        range_name = "Tablas 1-10"
    }
    5 = @{
        name = "Tabla del 5 - Contando de Cinco en Cinco"
        desc = "Tabla del 5 con el patrón de 5 y 0. Perfecto para aprender dinero, decir la hora y contar de cinco en cinco."
        keywords = "tabla del 5, contar de cinco, dinero, leer la hora, multiplicar por 5"
        range_name = "Tablas 1-10"
    }
    6 = @{
        name = "Tabla del 6 - Números Complejos"
        desc = "Tabla del 6 con patrones visuales y estrategias de memorización. Aprende las multiplicaciones por 6 con ejercicios interactivos."
        keywords = "tabla del 6, multiplicar por 6, patrones numéricos, ejercicios interactivos"
        range_name = "Tablas 1-10"
    }
    7 = @{
        name = "Tabla del 7 - Multiplicación Dinámica"
        desc = "Tabla del 7 con prácticas variadas y estrategias visuales. Domina las multiplicaciones por 7 con juegos educativos."
        keywords = "tabla del 7, multiplicar por 7, ejercicios dinámicos, juegos matemáticos"
        range_name = "Tablas 1-10"
    }
    8 = @{
        name = "Tabla del 8 - Octuplicación"
        desc = "Tabla del 8 con patrones dobles y visualización. Practica las multiplicaciones por 8 con ejercicios y juegos interactivos."
        keywords = "tabla del 8, multiplicar por 8, patrones dobles, ejercicios matemáticos"
        range_name = "Tablas 1-10"
    }
    9 = @{
        name = "Tabla del 9 - El Truco del Patrón"
        desc = "Tabla del 9 con el famoso truco del patrón. Aprende los secretos de la tabla del 9 y domina las multiplicaciones."
        keywords = "tabla del 9, multiplicar por 9, patrón del 9, truco matemático"
        range_name = "Tablas 1-10"
    }
    10 = @{
        name = "Tabla del 10 - Multiplicar por 10"
        desc = "Tabla del 10: la más fácil. Multiplicar por 10 solo añade un cero. Juegos, ejercicios y practica interactiva."
        keywords = "tabla del 10, multiplicar por 10, añadir cero, sistema decimal"
        range_name = "Tablas 1-10"
    }
}

# Rest of numbers (11-100) - generic but correct translations
for ($i = 11; $i -le 100; $i++) {
    $rangeNum = [math]::Floor(($i - 1) / 10) * 10 + 1
    $rangeEnd = $rangeNum + 9
    $range_name = "Tablas $rangeNum-$rangeEnd"
    
    if (-not $translations.ContainsKey($i)) {
        $translations[$i] = @{
            name = "Tabla del $i - Aprender a Multiplicar"
            desc = "Aprende la tabla del $i con ejercicios interactivos, patrones visuales y juegos educativos para dominar las multiplicaciones."
            keywords = "tabla del $i, multiplicar por $i, ejercicios matemáticos, prácticas interactivas"
            range_name = $range_name
        }
    }
}

# Apply translations to all 100 pages in both folders
foreach ($folder in @("app/tabla", "app/sayi")) {
    for ($i = 1; $i -le 100; $i++) {
        $filePath = "$folder/$i/page.tsx"
        if (Test-Path $filePath) {
            $content = Get-Content $filePath -Raw
            $trans = $translations[$i]
            
            # Update title
            $content = $content -replace '"name": "[^"]*"(?=\s*,\s*"description".*?@id.*?/#webpage)', "`"name`": `"$($trans.name)`""
            
            # Update description in WebPage schema
            $content = $content -replace '"description": "[^"]*"(?=\s*,\s*"isPartOf".*?#website)', "`"description`": `"$($trans.desc)`""
            
            # Update breadcrumb range name
            $oldRangePattern = '"name": "[^"]*(?:Tablas|çarpım).*?\d+-\d+[^"]*"'
            $content = $content -replace $oldRangePattern, "`"name`": `"$($trans.range_name)`""
            
            # Update metadata title
            $content = $content -replace "title: '[^']+'", "title: '$($trans.name) | Tablas de Multiplicar'"
            
            # Update metadata description  
            $content = $content -replace 'description: "[^"]+"', "description: '$($trans.desc)'"
            
            # Update metadata keywords if present
            $content = $content -replace "keywords: '[^']+'", "keywords: '$($trans.keywords)'"
            
            # Update canonical URL
            if ($folder -eq "app/tabla") {
                $content = $content -replace "canonical: '[^']+'", "canonical: '/tabla/$i'"
            } else {
                $content = $content -replace "canonical: '[^']+'", "canonical: '/sayi/$i'"
            }
            
            Set-Content $filePath $content -Encoding UTF8
            Write-Host "✓ Fixed $folder/$i"
        }
    }
}

Write-Host "All 200 pages fixed with proper Spanish translations!`""

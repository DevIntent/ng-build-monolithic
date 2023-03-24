#!/bin/bash

echo "<div>" > src/app/app.component.html

for i in {1..1000}
do
  npx -p @angular/cli@15 ng generate component "component$i"
  echo "  <app-component$i></app-component$i>" >> src/app/app.component.html
done

echo "</div>" >> src/app/app.component.html

cd ../../
cd back-end\services\movies
start cmd /k "npm run dev"
cd ../
cd users
start cmd /k "yarn dev"
cd ../
cd finance
start cmd /k "yarn dev"
cd ../
cd cinemas
start cmd /k "yarn dev"
cd ../
cd session
start cmd /k "yarn dev"
cd ../../../
cd front-end
start cmd /k "yarn dev"
pause
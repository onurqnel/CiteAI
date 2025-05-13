# How to Use?

## Clone and Reinitialize Git

```bash
git clone <repository-url> my-project
cd my-project
rm -rf .git   # Remove Git history                  
git init      # Initialize a fresh Git repository
git config init.defaultBranch main                      
git remote add origin <new-repository-url> 
```

## Project Setup

```bash
cp .env.template .env        # Create a local .env file                          
# Fill in necessary environment variables

python -m venv ~/pyenvs/my-project-backend      # Create a virtual environment    
source ~/pyenvs/my-project-backend/bin/activate # Activate the environment
pip install -r backend/requirements.txt         # Install backend dependencies

cd frontend
npm install
npm update
npm run dev
```

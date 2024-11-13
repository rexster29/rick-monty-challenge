# Graph Legal Technical Challenge

## Objective
Create a Rick and Morty character search engine with cloud infrastructure, backend API, and frontend interface.

## Deadline
The implementation should not take more than a day. We would expect that you can solve this in one weekend. And submit by the next Monday.

## Part 1: Cloud Infrastructure (GCP + Terraform)

### Requirements:
- Create Terraform configuration for MongoDB Community Edition deployment on Google Cloud Platform
- Configure Google Compute Engine and attach Block storage
- Set up firewall rules to protect the instance
- Download and store all characters from the [Rick and Morty API](https://rickandmortyapi.com/documentation/#get-all-characters)
- Destroy once and restore from block storage.

### Evaluation Criteria:
- Clean readable Terraform code
- Implementation on Google Cloud with Compute Engine and Block Storage
- Backup and restore functionality
- Proper security measures using Firewall and Authentication

## Part 2: Backend (Golang)

### Requirements:
- Build a JSON REST API using Go
- Connect to MongoDB
- Implement search functionality by character name to fetch character details
- Properly handle errors and edge cases

### Evaluation Criteria:
- Clean code architecture
- Error handling

## Part 3: Frontend (React + TypeScript)

### Requirements:
- Build Search Engine for Character names
- Display character details and associated episode numbers
- Handle loading and error states
- Add basic styling

### Evaluation Criteria:
- TypeScript implementation
- Component structure
- State management
- Code organization

## Bonus Points:
- Implementing caching
- Adding pagination
- Usage of TailwindCSS

## Submission Guidelines:
1. Create a public GitHub repository
2. Include README.md with:
   - Setup instructions
   - API documentation
   - Architecture overview
   - Testing instructions
3. Separate your code into appropriate directories:
   - /terraform
   - /backend
   - /frontend
4. Always use pull requests to merge your code into the main branch.
5. Always squash commits while merging the PR.
5. Do not force push.
6. Do not fork this repo or link it in anyway to your solution.
7. Submit a link to your solution repo as a response to the email.

## Notes:
- Not following the instructions of this challenge leads to disqualification.
- Use of Generative AI is permitted, however, make sure it really works.
- Focus on the MongoDB implementation first
- Backend as second, and Frontend as last
- Once the MongoDB setup is built and tested, you may destroy it to save cloud costs.
- Use authentication and firewall settings
- Follow clean code principles
- Implement error handling
- Follow best practices for each technology
- Keep commit history clean and meaningful
- Partial submissions are also acceptable, however, it is important to stick to the timeline.
- During the interview you shall be expected to present the entire setup and answer questions.

Please create an Issue on this repository if you have any questions about the requirements.

Good luck!

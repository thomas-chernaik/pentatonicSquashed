from services import Services
sample_text = '''
"Designing iterative products to support the way people communicate and interact in their everyday and working lives" (Sharp, Rogers, Preece, 2019)
"The design of spaces for human communication and interaction" (Winograd, 1997)

Whatever the definition, the human side of ID should be focussed on and should be a common thread throughout the module and UI design. We can deduce that key goals for interaction design are:


Product usability (potentially this is the primary goal) - simple to learn/effective in use/inclusive/enjoyable
People-centric - involve users in the design process

Interaction design requires implementing a global set of foundational [[Design Principles]]. Good ID should be:


Based on how everyday objects behave
Intuitive, easy, logical, and a pleasure to use
Only require one-step actions to perform core tasks

User experience is too large a topic to view, and we must focus on UI through the lens of ID.
![[Pasted image 20221019222158.png|300]]

Designers have to optimise the interactions users have with a product so that they match the users' activities and needs.When designing UIs, we need to take into consideration:


Who the customers are
What actions/activities are carried out
Where the interaction takes place

Core characteristics of ID is that user should be involved throughout development of the project, and that specific usability and UX goals need to be identified, clearly documented, and agreed at the beginning of the project. Iteration is needed through the core activities.
'''
print(Services.text_to_flashcards(sample_text))
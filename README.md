
# ColorGuide Browser Extension
## Implemented Features

- ### Popup screen with instructions: 
This is a popup screen that explains to the user how to use the extension.

- ### Eyedropper that can tag pixels:
Multiple tags that overlay the screen can tag pixel colors to get translation.

- ### Tags display a color dictionary translation:
Each tag displays the basic color name value of the pixel selected.

- ### Multiple tags on a page can be minimized/maximized:
There can be many tags and tags can be minimized/maximized.

- ### Can exit tool and continue browsing, with tags persisting:
A user can close the eyedropper color tagger and keep all of the tags that exist on the page.

- ### Can remove all label with shortcut:
A user can remove all tags on page with shortcut `Alt Shift R`

- ### Tool works independently on different tabs:
A user can toggle tool on/off in a tab and it would not interfere with other tabs

- ### Status bar can be toggled
 To turn the tool on and off, the user can toggle the status bar


<a name="install"></a>
## Installation Instructions

1. In your terminal, execute
```
git clone https://github.com/Teaching-Accessibility/course-project-colorguide.git
```

2. In Chrome, go to this link: `chrome://extensions`, and switch to developer mode (toggle button in upper right hand corner)

3. Click `Load Unpacked` button and select the cloned repo folder

4. On Mac and Windows, press `Alt Shift W` to run the extension. Or, select the extension under the puzzle piece icon on the taskbar of Chrome and click the "Open/close the color selector" button.

#### Helpful Links and Tips:
- [How To Install The Unpacked Extension In Chrome](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/#:~:text=Goto%20Chrome%20Settings%20using%20three,Then%20Select%20Extensions.&text=Click%20on%20Load%20Unpacked%20and,which%20the%20manifest%20file%20exists) 
- If the extension does not work, restart Chrome by typing "chrome://restart" into the address bar

<a name="UIDoc"></a>
## UI Documentation 
 
<a name="instruction"></a>
### Screen 1: Instruction Window

This is the instructions window for how to use the program, it comes up when users select to open the extension.

![Screenshot 2023-03-09 203850](https://user-images.githubusercontent.com/91226003/224225128-71810000-20bd-4005-ad79-314ed127bc7d.png)

### Screen 2: Tool in use 

After turning on the tool either through the [Instruction Window](#instruction), or the shortcut `Alt Shift W`, a status label will appear in the top right corner. Now, users cannot interact with buttons or links on the webpage, but instead, wherever users click, a label will be created.

<img width="925" alt="Full Screen View" src="https://user-images.githubusercontent.com/64702845/224154070-82661e4f-bd32-4a5e-bc55-cbeaccb5f884.png">

### Screen 3: Color Labels

Color labels can be placed anywhere on the open website and include the color name of the spot selected, a minimize button in the upper left, and a close button in the upper right. There is a circle in the upper left corner of the label, which indicates the location where the user clicked.

<img width="325" alt="Color Labels" src="https://user-images.githubusercontent.com/64702845/224150228-e3748516-317d-45ef-abd6-4767ca58ca61.png">

### Screen 4: Minimized Color Labels

When a color label is minimized, it becomes only a white "+" on a black background over the selected spot. If the "+" is clicked, the label will re-expand and return to the state it was in before being minimized.

<img width="325"  alt="Minimized Color Labels" src="https://user-images.githubusercontent.com/64702845/224150617-93b6557a-e5cc-4154-887e-af7eecfbaedb.png">

### Screen 5: Tool turned off

After turning off the tool either through the [Instruction Window](#instruction), the shortcut `Alt Shift W`, or double clicking the status label, the status label will indicate the tool is turned off, then disappear after some seconds. Now users can continue browsing the website, and the labels stay where there are. Users can manually close each label, or use the shortcut `Alt Shift R` to close all of the labels at once. The shortcut `Alt Shift R` can be used when the tool is on or off.

<img width="925" alt="Full Screen View" src="https://user-images.githubusercontent.com/64702845/224157208-fe516320-8e39-4783-8273-7e586e4df41b.png">


<a name="guideline"></a>
## Design Guidelines

WCAG 1.1 Text Alternatives: All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.

WCAG 1.2 Time-based Media: There is no time-based media in our app

WCAG 1.3.1 Info and Relationships: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

WCAG 1.3.2 Meaningful Sequence: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

WCAG 1.3.3 Sensory Characteristics: Instructures provided for understanding and operating content do not rely solely on sensory characteristics of components.

WCAG 1.4.1 Use of Color: Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

WCAG 1.4.2 Audio Control: There is no automatic audio in our app.

WCAG 1.4.6 Contrast (Enhanced): The visual presentation of text and images of text has a contrast ratio of at least 7:1. (The elements of our application have a contrast of 14 or greater)

WCAG 1.4.7 Low or No Background Audio: There is no prerecorded audio-only content

WCAG 1.4.9 Images of Text: There are no images of text in our app.

WCAG 1.4.11 Non-text Contrast: UI Components have a contrast ratio of at least 3:1 against adjacent color(s).

WCAG 1.4.13 Content on Hover or Focus: There is no content on hover or keyboard focus that triggers additional content to become visible and then hidden.

WCAG 2.2 Enough Time: There are no time constrictions for using our app.

WCAG 2.3 Seizures and Physical Reactions: There is no content designed in a way known to cause seizures or other physical reactions in our app.

WCAG 2.4.1 Bypass Blocks: There are no repeated blocks of content on multiple pages.

WCAG 2.4.2 Page Titled: The pop-up with instructions has a title that describes the topic.

WCAG 2.4.3 Focus Order: Focusable components receive focus in an order that preserves meaning and operability

WCAG 2.4.4 Link Purpose (In Context): The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.

WCAG 2.4.6 Headings and Labels: Heading and labels describe topic or purpose.

WCAG 2.4.7 Focus Visible: Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

WCAG 2.5.1 Pointer Gestures: All functionality can be operated with a single pointer without a path-based gesture.

WCAG 2.5.3 Label in Name: For user interface components with labels that include text, the name contains the text that is presented visually.

WCAG 2.5.4 Motion Actuation: There is no functionality requiring device motion.

WCAG 3.1.1 Language of Page: The default human language can be programmatically determined.

WCAG 3.2.1 On Focus: When any user interface component receives focus, it does not initiate a change of context.

WCAG 3.2.2  On Input: Changing the setting of any user interface component does not automatically cause a change of context unless the use has been advised of the behavior before using the component.

WCAG 4.1.2 Name, Role, Value: For all user interface components, the name and role can be programmatically determined

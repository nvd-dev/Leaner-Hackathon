import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai";
import readline from "readline"

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// JSON BODY retrieved from the api call
var JsonBody = {
  "ocr_type" : "receipts",
  "request_id" : "P_38.32.48.2_lfprttv0_9mn",
  "ref_no" : "ocr_nodejs_123",
  "file_name" : "Walmart.png",
  "request_received_on" : 1679857576813,
  "success" : true,
  "image_width" : 898,
  "image_height" : 970,
  "image_rotation" : 0,
  "recognition_completed_on" : 1679857577689,
  "receipts" : [ {
    "merchant_name" : "Walmart Money Center",
    "merchant_address" : "2165 Winchester Rd NE, Huntsville, AL 35811, USA",
    "merchant_phone" : "+1 256-716-6773",
    "merchant_website" : null,
    "merchant_tax_reg_no" : null,
    "merchant_company_reg_no" : null,
    "region" : null,
    "mall" : null,
    "country" : "US",
    "receipt_no" : "04031",
    "date" : "2019-06-05",
    "time" : null,
    "items" : [ {
      "amount" : 1.78,
      "category" : null,
      "description" : "Zuchinni Green F",
      "flags" : " T",
      "qty" : "0.778 kg",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 0.94,
      "category" : null,
      "description" : "Banana",
      "flags" : " X",
      "qty" : "4",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 3.97,
      "category" : null,
      "description" : "Chicken Breast",
      "flags" : " X",
      "qty" : "2 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 1.62,
      "category" : null,
      "description" : "Chicken Stock",
      "flags" : " X",
      "qty" : "1 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    }, {
      "amount" : 1.97,
      "category" : null,
      "description" : "Potatoes",
      "flags" : " X",
      "qty" : "4 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    },
    {
      "amount" : 1.97,
      "category" : null,
      "description" : "Broccolli",
      "flags" : " X",
      "qty" : "4 lb",
      "remarks" : null,
      "tags" : "Food",
      "unitPrice" : null
    } ],
    "currency" : "USD",
    "total" : 11.21,
    "subtotal" : 10.28,
    "tax" : 0.93,
    "service_charge" : null,
    "tip" : null,
    "payment_method" : "cash",
    "payment_details" : null,
    "credit_card_type" : null,
    "credit_card_number" : null,
    "ocr_text" : "  Walmart\n  Save money. Live better.\n             SUPERCENTER\n   256-716-6773 Mgr MARCUS WILLIAMS\n ST# 07324 OP# 009045 TE# 45 TR# 04031\n REDUCED TO CLEAR        WAS 2.97\n DONUTS      029907690297 F      1.78 T\n XTRACLEAN T 003500055677        0.94 X\n GOOF OFF 60Z 009394500661       3.97 X\n COLGATE TP  003500051091        1.62 X\n GENERIC ALK 001280052837        1.97 X\n                   SUBTOTAL     10.28\n         TAX 1    9.000 %        0.93\n                      TOTAL     11.21\n                 CASH TEND      11.21\n                 CHANGE DUE      0.00\n            # ITEMS SOLD 5\n     TC# 7078 7629 7444 5788 2176\n        06/05/19      01:56:28",
    "ocr_confidence" : 96.60,
    "width" : 793,
    "height" : 889,
    "avg_char_width" : 20.4752,
    "avg_line_height" : 19.878,
    "category" : "others/finance",
    "source_locations" : {
      "date" : [ [ {
        "y" : 907,
        "x" : 215
      }, {
        "y" : 907,
        "x" : 395
      }, {
        "y" : 932,
        "x" : 395
      }, {
        "y" : 932,
        "x" : 215
      } ] ],
      "total" : [ [ {
        "y" : 627,
        "x" : 699
      }, {
        "y" : 627,
        "x" : 809
      }, {
        "y" : 645,
        "x" : 809
      }, {
        "y" : 645,
        "x" : 699
      } ] ],
      "receipt_no" : [ [ {
        "y" : 320,
        "x" : 722
      }, {
        "y" : 320,
        "x" : 829
      }, {
        "y" : 344,
        "x" : 829
      }, {
        "y" : 344,
        "x" : 722
      } ] ],
      "subtotal" : [ [ {
        "y" : 560,
        "x" : 699
      }, {
        "y" : 560,
        "x" : 809
      }, {
        "y" : 579,
        "x" : 809
      }, {
        "y" : 579,
        "x" : 699
      } ] ],
      "doc" : [ [ {
        "y" : -2,
        "x" : 15
      }, {
        "y" : -2,
        "x" : 887
      }, {
        "y" : 975,
        "x" : 887
      }, {
        "y" : 975,
        "x" : 15
      } ] ],
      "tax" : [ [ {
        "y" : 593,
        "x" : 721
      }, {
        "y" : 592,
        "x" : 807
      }, {
        "y" : 612,
        "x" : 807
      }, {
        "y" : 613,
        "x" : 721
      } ] ],
      "merchant_phone" : [ [ {
        "y" : 254,
        "x" : 106
      }, {
        "y" : 254,
        "x" : 377
      }, {
        "y" : 280,
        "x" : 377
      }, {
        "y" : 280,
        "x" : 106
      } ] ]
    }
  } ]
}
var json = {"name": "Peter", "age": 22, "country": "United States"}
//var extractedBody = JSON.parse(test)
//var obj = JSON.parse(json);

// JsonBody.receipts[0].items.forEach( x => console.log(x.description + " "+x.qty))
const ingredients = JsonBody.receipts[0].items.map(x => x.description + " " + x.qty).join(", ");

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// userInterface.prompt()
// userInterface.on("line", async input => {
//     const res = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: input }]
//     })
//     console.log(res.data.choices[0].message.content)
//     userInterface.prompt()
// })

function displayOptions() {
    console.log("\nPlease choose an option:");
    console.log("1. Make a recipes out of the available ingredients");
    console.log("2. Give estimate expiration dates");
    console.log("3. Give estimate nutritions value");
    console.log("4. Give estimate on potential health risk");
    console.log("5. Exit");
    userInterface.prompt();
}

async function initialResponse() {
    const prompt = `Give a recipes that use these ingredients: ${ingredients}`
    console.log('\n')
    console.log(`User input: ${prompt}`)
    console.log('\n')
    const true_prompt = `I will give you a list of ingredients, assuming that these ingredients that just been purchased today but suppose we still have a lot of bacon leftovers in the fridge that's close to expiration dates, give a warning that there's still bacon left, give two recipes, one that include bacon and the ingredients in the list, the other just base off of the ingredients on the list. List of ingredients: ${ingredients}`

    const initialRes = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: true_prompt }]
    });
    const response = initialRes.data.choices[0].message.content
    console.log(`\n ${response}`)
    displayOptions()
}

async function secondOption() {
    const prompt = `Give an estimate expiration dates of these ingredients assuming that I purchased them today: ${ingredients}`

    const initialRes = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
    });
    console.log(initialRes.data.choices[0].message.content)
    displayOptions()
}

async function thirdOption() {
    const prompt = `Give a rough estimate nutritions values, including micronutritions, vitamins, etc. for these ingredients: ${ingredients}`

    const initialRes = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
    });
    console.log(initialRes.data.choices[0].message.content)
    displayOptions()
}

async function fourthOption() {
    const prompt = `If I only eat this ingredients for the next few months, what is the potential health risk and give suggestion on what ingredients should I add to my diet so that it's more balance, answer using lists: ${ingredients}`

    const initialRes = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
    });
    console.log(initialRes.data.choices[0].message.content)
    displayOptions()
}

userInterface.on("line", async input => {
    switch (input.trim()) {
        case '1':
            await initialResponse();
            break;
        case '2':
            await secondOption();
            break;
        case '3':
            await thirdOption();
            break;
        case '4':
            await fourthOption();
            break;
        case '5':
            process.exit()
        default:
            console.log("Invalid choice, please choose a valid option.");
            displayOptions();
            break;
    }
});

displayOptions();

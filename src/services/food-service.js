import { data } from "./data.js"
import { doc, collection, getDoc, getDocs, writeBatch, query, where, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { v4 as uuid } from 'uuid'; // package to generate unique id's for each doc

// add multiple docs at once
export const addFoodsToFirestore = async () => {
  try {
    const foodsCollection = collection(db, "foods"); // creates ref to "foods" collection
    const snapshot = await getDocs(foodsCollection);

    // only add items if the collection is empty
    if (snapshot.empty) {
      const batch = writeBatch(db);

      data.forEach((item) => {
        const docRef = doc(foodsCollection, uuid()); // creates new doc with unque id using uuid function
        batch.set(docRef, item); // adds doc to batch with the generated ref
      });

      await batch.commit()
      console.log("Docs added successfully");
    } else {
      console.log("Collection is already populated")
    }
  } catch (e) {
    console.error("Error adding docs:", e)
  }
};

export const getAllFoods = async () => {
  const collectionRef = collection(db, "foods")
  const snapshot = await getDocs(collectionRef);

  const cleanedData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });
  return cleanedData;
};

export const getAllCategories = async () => {
  const collectionRef = collection(db, "categories")
  const snapshot = await getDocs(collectionRef);

  const cleanedData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  });
  console.log("categories: ", cleanedData);
  return cleanedData;
}

// get category by id
export const getCategoryById = async (id) => {
  const docRef = doc(db, "categories", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    console.log("Document data:", docSnap.data());
    throw new Error("Category doesn't exist");
  } else {
    console.log("No document found");
    return { id: snapshot.id, ...snapshot.data() };
  }
}

// get food by category
export const getFoodsByCategory = async (categoryName) => {
  const foodsRef = collection(db, "foods")
  const foodsQuery = query(foodsRef, where("category", "==", categoryName));

  const querySnapshot = await getDocs(foodsQuery);
  return querySnapshot.docs.map((doc => ({ id: doc.id, ...doc.data() })))
}

export const saveProduct = async (id, isSaved) => {
  try {
    const docRef = doc(db, "foods", id);
    await updateDoc(docRef, { saved: isSaved });
    console.log(`Saving item with id ${id}, is Saved: ${isSaved}`)
  } catch (error) {
    console.error("couldn't update document", error)
  }
}

export const getSavedProducts = async () => {
    const savedFoodsRef = collection(db, "foods")
    const savedProductsQuery = query(savedFoodsRef, where("saved", "==", true))

    const querySnapshot = await getDocs(savedProductsQuery);
    return querySnapshot.docs.map((doc => ({ id: doc.id, ...doc.data() })))
}

